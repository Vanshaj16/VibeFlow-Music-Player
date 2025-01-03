import { useState, useEffect, useContext } from 'react';
import { Icon } from '@iconify/react';
import { Howl } from 'howler';
import songContext from '../../contexts/songContext';

const SingleSongCard = ({ info, playSound }) => {
    const [duration, setDuration] = useState(null);
    const {currentSong, setCurrentSong} = useContext(songContext);

    useEffect(() => {
        const sound = new Howl({
            src: [info.track],
            html5: true,
            onload: () => {
                const durationInSeconds = sound.duration();
                const minutes = Math.floor(durationInSeconds / 60);
                const seconds = Math.floor(durationInSeconds % 60);
                setDuration(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
            }
        });
    }, [info.track]);

    return (
        <div className="flex hover:bg-gray-500 hover:bg-opacity-20 p-2 rounded-md relative" 
            onClick={() => {
                setCurrentSong(info);
            }}
        >
            <div className="w-12 h-12 bg-cover bg-center relative" style={{
                backgroundImage: `url("${info.thumbnail}")`,
            }}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
                    <Icon icon="fontisto-play" color="white" width="20" height="20" />
                </div>
            </div>
            <div className="flex w-full">
                <div className="text-white flex-col justify-center pl-4 w-5/6">
                    <div className="cursor-pointer hover:underline">
                        {info.name}
                    </div>
                    <div className="text-xs text-gray-400 cursor-pointer hover:underline">
                        {info.artist.firstName + " " + info.artist.lastName}
                    </div>
                </div>
                <div className="w-1/6 flex items-center justify-center text-gray-400 text-sm">
                    <div>{duration || 'Loading...'}</div>
                </div>
            </div>
        </div>
    );
}

export default SingleSongCard;