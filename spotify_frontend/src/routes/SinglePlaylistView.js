import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import SingleSongCard from "../components/shared/SingleSongCard";

const SinglePlaylistView = () => {
    const [playlistDetails, setPlaylistDetails] = useState({});
    const {playlistId} = useParams();

    useEffect(() => {
        const getData = async () => {
            // This function will call the API to get the playlist details
            const response = await makeAuthenticatedGETRequest(
                "/playlist/get/playlist/" + playlistId
            );
            setPlaylistDetails(response);
        };
        getData();
    }, []);
    return (
        <LoggedInContainer curActiveScreen={"library"}>
            {playlistDetails._id && (
                <div>
                    <div className="text-white font-semibold text-xl pt-8">
                        Playlists Name
                    </div>
                    <div className="pt-10 space-y-3">
                        {playlistDetails.songs.map((item) => {
                            return (
                                <SingleSongCard
                                    info={item}
                                    key={JSON.stringify(item)}
                                    playSound={() => {}}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </LoggedInContainer>
    );
};
export default SinglePlaylistView;