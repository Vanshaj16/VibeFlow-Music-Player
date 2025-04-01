import { useState, useEffect } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { Icon } from '@iconify/react';
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import SingleSongCard from "../components/shared/SingleSongCard";
import { GeminiAPI } from "../utils/config";

const SearchPage = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [songData, setSongData] = useState([]);
    const [recommendedSongs, setRecommendedSongs] = useState([]);

    useEffect(() => {
        if (searchText.trim() !== "") {
            searchSong();
        } else {
            setSongData([]);
            setRecommendedSongs([]);
        }
    }, [searchText]);

    const searchSong = async () => {
        try {
            // This function will call the search API
            const response = await makeAuthenticatedGETRequest(
                "/song/get/songname/" + searchText
            );
            setSongData(response.data || []);

            // Call the Gemini API for recommendations
            const recommendationResponse = await fetch("https://api.gemini.com/v1/recommendations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + GeminiAPI
                },
                body: JSON.stringify({ query: searchText })
            });

            if (!recommendationResponse.ok) {
                throw new Error("Failed to fetch recommendations");
            }

            const recommendationData = await recommendationResponse.json();
            setRecommendedSongs(recommendationData.recommendations || []);
        } catch (error) {
            console.error("Error fetching recommendations:", error);
            setRecommendedSongs([]);
        }
    };

    return (
        <LoggedInContainer curActiveScreen="search">
            <div className="w-full py-6">
                <div className={`w-1/2 p-3 text-sm text-white rounded-full bg-gray-800 px-5 flex space-x-3 items-center ${
                    isInputFocused ? "border border-white" : ""
                }`}>
                    <Icon icon="akar-icons:search" className="text-2xl" />
                    <input
                        type="text"
                        placeholder="What do you want to listen to?"
                        className="w-full bg-gray-800 focus:outline-none"
                        onFocus={() => {
                            setIsInputFocused(true);
                        }}
                        onBlur={() => {
                            setIsInputFocused(false);
                        }}
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                </div>
                {songData.length > 0 ? (
                    <div className="pt-10 space-y-3">
                        <div className="text-white">
                            Showing search results for
                            <span className="font-bold"> {searchText}</span>
                        </div>
                        {songData.map((item) => {
                            return (
                                <SingleSongCard
                                    info={item}
                                    key={JSON.stringify(item)}
                                    playSound={() => {}}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-gray-400 pt-10">
                        Nothing to show here.
                    </div>
                )}
                {recommendedSongs.length > 0 && (
                    <div className="pt-10 space-y-3">
                        <div className="text-white">
                            Recommended songs based on your search:
                        </div>
                        {recommendedSongs.map((item) => {
                            return (
                                <SingleSongCard
                                    info={item}
                                    key={JSON.stringify(item)}
                                    playSound={() => {}}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </LoggedInContainer>
    );
};

export default SearchPage;