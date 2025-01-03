import { useState, useEffect, use } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";

const Library = () => {
    const [myPlaylists, setMyPlaylists] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/playlist/get/me");
            setMyPlaylists(response.data);
        };
        getData();
    }, []);
    return (
        <LoggedInContainer curActiveScreen={"library"}>
            <div className="text-white font-semibold text-xl pt-8">
                My Playlists
                <div className="py-5 grid gap-5 grid-cols-5">
                    {myPlaylists.map(item => {
                        return (
                            <Card 
                                key={JSON.stringify(item)} 
                                title={item.name} 
                                description="" 
                                imageUrl={item.thumbnail}
                                playlistId={item._id}
                            />
                        );
                    })}
                </div>
            </div>
        </LoggedInContainer>
    );
};

const Card = ({title, description, imageUrl, playlistId}) => {
    const Navigate = useNavigate();
    return (
        <div 
            className='bg-black bg-opacity-40 w-full p-4 rounded-lg cursor-pointer hover:bg-opacity-80'
            onClick = {() => {
                Navigate ("/playlist/" + playlistId);
            }}
        >
            <div className='pb-4 pt-2'>
                <img 
                    className='w-full rounded-md' 
                    src={imageUrl}
                    alt="label"
                />
            </div>
            <div className='text-white text-sm font-semibold py-3'>{title}</div>
            <div className='text-gray-500 text-xs'>{description}</div>
        </div>
    )
};
export default Library;