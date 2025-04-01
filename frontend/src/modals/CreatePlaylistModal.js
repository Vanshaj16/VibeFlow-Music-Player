import TextInput from "../components/shared/TextInput";
import { useState } from "react";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelpers";

const CreatePlaylistModal = ({closeModal}) => {
    const [playlistName, setPlaylistName] = useState("");
    const [playlistThumbnail, setPlaylistThumbnail] = useState("");

    const createPlaylist = async () => {
        const response = await makeAuthenticatedPOSTRequest(
            "/playlist/create", 
            {name: playlistName, thumbnail: playlistThumbnail, songs: []}
        );
        if(response._id){
            closeModal();
        } else {
            alert("Failed to create playlist");
        }
    }
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
                    Create Playlist
                </div>
                <div className="space-y-4 flex flex-col justify-center items-center">
                    <TextInput 
                            label="Name"
                            labelClassName={"text-white"}
                            placeholder="Playlist Name"
                            value={playlistName}
                            setValue={setPlaylistName}
                    />
                    <TextInput 
                            label="Thumbnail"
                            labelClassName={"text-white"}
                            placeholder="Thumbnail"
                            value={playlistThumbnail}
                            setValue={setPlaylistThumbnail}
                    />
                    <div className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold"
                        onClick={createPlaylist}
                    >
                        Create
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePlaylistModal;
