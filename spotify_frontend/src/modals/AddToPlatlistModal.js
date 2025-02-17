import { useEffect, useState } from "react";
import {makeAuthenticatedGETRequest} from "../utils/serverHelpers";

const AddToPlaylistModal = ({closeModal, addSongToPlaylist}) => {
    const [myPlaylists, setMyPlaylists] = useState([]);
        useEffect(() => {
            const getData = async () => {
                const response = await makeAuthenticatedGETRequest("/playlist/get/me");
                setMyPlaylists(response.data);
            };
            getData();
        }, []);
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
        >
            <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black w-1/3 rounded-md p-4"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
            <div className="text-white mb-5 font-semibold text-lg">
                Select Playlist
            </div>
            
                <div className="space-y-4 flex flex-col items-center justify-center">
                    {myPlaylists.map(item => {
                        return (
                            <PlaylistListComponent 
                                info={item}
                                addSongToPlaylist={addSongToPlaylist}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );

};
const PlaylistListComponent = ({info, addSongToPlaylist}) => {
    return (
        <div className="bg-app-black w-full flex items-center space-x-4 hover:bg-gray-500 hover:bg-opacity-20 p-2 rounded-md relative cursor-pointer p-3"
            onClick={() => {
                addSongToPlaylist(info._id);
            }}
        >
            <div>
                <img 
                    src={info.thumbnail}
                    className="w-10 h-10 rounded"
                    alt="thumbnail"
                />
            </div>
            <div>
                <div className="text-white font-semibold text-sm">
                    {info.name}
                </div>
            </div>
        </div>
    );
};
export default AddToPlaylistModal;
