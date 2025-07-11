import { useState, useLayoutEffect, useContext, useRef} from 'react';
import {Howl, Howler} from 'howler';
import Vibeflow_icon from '../assets/images/Vibeflow_icon1.png';
import Vibeflow from '../assets/images/Vibeflow.png';
import IconText from '../components/shared/IconText';
import SidebarText from '../components/shared/SidebarText';
import TextWithHover from '../components/shared/TextWithHover';
import {Icon} from '@iconify/react';
import songContext from '../contexts/songContext';
import { Link } from 'react-router-dom';
import CreatePlaylistModal from '../modals/CreatePlaylistModal';
import AddToPlaylistModal from '../modals/AddToPlatlistModal';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelpers';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const LoggedInContainer = ({children, curActiveScreen}) => {
    const [CreatePlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
    const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);

    const {
        currentSong, 
        setCurrentSong,
        soundPlayed, 
        setSoundPlayed, 
        isPaused, 
        setIsPaused,
    } = useContext(songContext);
    
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        // the following if statement will prevent the useEffect from running on the first render.
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        if (!currentSong) {
            return;
        }
        changeSong(currentSong.track);
    }, [currentSong && currentSong.track]);
    
    const playSound = () => {
        if(!soundPlayed){
            return;
        }
        soundPlayed.play();
    };

    const addSongToPlaylist = async (playlistId) => {
        const songId = currentSong._id;

        const payload = {playlistId, songId};
        const response = await makeAuthenticatedPOSTRequest(
            "/playlist/add/song", 
            payload
        );
        if(response._id){
            setAddToPlaylistModalOpen(false);
        } else {
            alert("Failed to add song to playlist");
        }
    };

    const changeSong = (songSrc) => {
        if(soundPlayed){
            soundPlayed.stop();
        }
        let sound = new Howl({ 
            src: [songSrc], 
            html5: true 
        }); 
        setSoundPlayed(sound);
        sound.play();
        setIsPaused(false);
    };

    const pauseSound = () => {
        soundPlayed.pause();
    };

    const togglePlayPause = () => {
        if(isPaused){
            playSound();
            setIsPaused(false);
        }else{
            pauseSound(); 
            setIsPaused(true);  
        }
    };
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const handleLogout = () => {
        removeCookie("token", { path: "/" });
        navigate("/login");
    };
    return( 
        <div className="h-full w-full bg-app-black">
            {CreatePlaylistModalOpen && (
                <CreatePlaylistModal 
                    closeModal={() =>{
                        setCreatePlaylistModalOpen(false);
                    }}
                />
            )}
            {addToPlaylistModalOpen && (
                <AddToPlaylistModal 
                    closeModal={() =>{
                        setAddToPlaylistModalOpen(false);
                    }}
                    addSongToPlaylist={addSongToPlaylist}
                />
            )}
            <div className={`${currentSong? "h-9/10" : "h-full"} w-full flex`}>
                {/* This first div will be the left panel */}
                <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                    <div>
                        {/* This div is for logo */}
                        <div className="logoDiv item center justify center p-6 px-18">
                            <div className="px-3"><img src={Vibeflow_icon} alt="vibeflow icon" width={80}/></div>
                            <img src={Vibeflow} alt="vibeflow" width={115}/>
                        </div>
                        <div className="py-1 text-sm">
                            <IconText 
                                iconName={"material-symbols:home"} 
                                displayText={"Home"}
                                targetLink={"/home"}
                                active={curActiveScreen === "home"}
                            />
                            <IconText 
                                iconName={"material-symbols:search-rounded"} 
                                displayText={"Search"}
                                targetLink={"/search"}
                                active={curActiveScreen === "search"}
                            />
                            <IconText 
                                iconName={"icomoon-free:books"} 
                                displayText={"Your Library"}
                                targetLink={"/library"}
                                active={curActiveScreen === "library"}
                            />
                            <IconText 
                                iconName={"material-symbols:library-music-sharp"} 
                                displayText={"My Music"}
                                targetLink={"/myMusic"}
                                active={curActiveScreen === "myMusic"}
                            />
                        </div>
                        <div className="pt-5 text-sm">
                            <IconText 
                                iconName={"material-symbols:add-box"} 
                                displayText={"Create Playlist"}
                                onClick={() => {
                                    setCreatePlaylistModalOpen(true);
                                }}
                            />
                            <IconText 
                                iconName={"mdi:cards-heart"} 
                                displayText={"Liked Songs"}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="pt-5 text-xs flex flex-row justify-center space-x-3">
                            <SidebarText displayText={"Legal"}/>
                            <SidebarText displayText={"Privacy Center"}/>
                            <SidebarText displayText={"Privacy Policy"}/>
                        </div>
                        <div className="pt-5 text-xs flex flex-row justify-center space-x-3">
                            <SidebarText displayText={"Cookies"}/>
                            <SidebarText displayText={"About Ads"}/>
                            <SidebarText displayText={"Accessibility"}/>
                        </div>
                    </div>
                    <div className="px-5 ">
                        <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                            <Icon icon="mingcute:earth-2-line"/>
                            <div className="ml-2 text-sm font-semibold">English</div>
                        </div>
                        {/* Logout button */}
                        <div
                            className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer mt-4"
                            onClick={handleLogout}
                        >
                            <Icon icon="mdi:logout" />
                            <div className="ml-2 text-sm font-semibold">Logout</div>
                        </div>
                    </div>
                </div>
                {/* This second div will be the right part(main content) */}
                <div className="h-full w-4/5 bg-app-black overflow-auto"> 
                    <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                        <div className="w-1/2 flex h-full">
                            <div className="w-2/3 flex justify-around items-center">
                                <TextWithHover displayText={"Premium"}/>
                                <TextWithHover displayText={"Support"}/>
                                <TextWithHover displayText={"Download"}/>
                                <div className="h-1/2 border-r border-white"></div>
                            </div>
                            <div className="w-1/3 flex justify-around h-full items-center">
                                <Link to="/uploadSong">
                                    <TextWithHover displayText="Upload Song"/>
                                </Link>
                                <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                    VS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content p-8 pt-0 overflow-auto">
                        {children}
                    </div>
                </div>
            </div>
        {/* This div is the current playing song*/}
        {
            currentSong &&
        <div className="w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4">
            <div className="w-1/4 flex items-center">
                <img 
                    src={currentSong.thumbnail}
                    alt="currentSongThumbnail"
                    className="h-14 w-14 rounded cursor-pointer"
                />
                <div className="pl-4">
                    <div className="text-sm cursor-pointer hover:underline">
                        {currentSong.name}
                    </div>
                    <div className="text-xs text-gray-400 cursor-pointer hover:underline">
                        {currentSong.artist.firstName + " " + currentSong.artist.lastName}
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-full flex justify-center flex-col items-center">
                <div className='flex w-1/3 justify-between items-center'>
                    {/* controls for the playing song go here*/}
                    <Icon 
                        icon="ph:shuffle-fill" 
                        fontSize={30} 
                        className="cursor-pointer text-gray-500 hover:text-white"
                    />
                    <Icon 
                        icon="mdi:skip-previous-outline" 
                        fontSize={30}
                        className="cursor-pointer text-gray-500 hover:text-white"
                    />
                    <Icon 
                        icon={isPaused?"ic:baseline-play-circle":"ic:baseline-pause-circle" }
                        fontSize={50}
                        className="cursor-pointer text-gray-500 hover:text-white"
                        onClick={togglePlayPause}
                    />
                    <Icon 
                        icon="mdi:skip-next-outline" 
                        fontSize={30}
                        className="cursor-pointer text-gray-500 hover:text-white"
                    />
                    <Icon 
                        icon="mdi:repeat" 
                        fontSize={30}
                        className="cursor-pointer text-gray-500 hover:text-white"
                    />
                </div>
                <div>
                    {/* Progress bar here */}
                </div>
            </div>
            <div className="w-1/4 flex justify-end items-center pr-4 space-x-4">
                <Icon 
                    icon="ic:round-playlist-add"
                    fontSize={30}
                    className="cursor-pointer text-gray-500 hover:text-white"
                    onClick={() => {setAddToPlaylistModalOpen(true)}}
                />
                <Icon 
                    icon="ph:heart-bold"
                    fontSize={25}
                    className="cursor-pointer text-gray-500 hover:text-white"
                />
            </div>
        </div>
        }
    </div>

    );
};

export default LoggedInContainer;
