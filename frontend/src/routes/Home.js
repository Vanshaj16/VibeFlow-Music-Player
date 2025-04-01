import Vibeflow_icon from '../assets/images/Vibeflow_icon1.png';
import Vibeflow from '../assets/images/Vibeflow.png';
import IconText from '../components/shared/IconText';
import SidebarText from '../components/shared/SidebarText';
import TextWithHover from '../components/shared/TextWithHover';
import {Icon} from '@iconify/react';
import {Link} from 'react-router-dom';

const artistsCardsData = [
    {   
        title:"Pritam",
        description:"Artist",
        imageUrl:"https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",
    }, 
    {
        title:"Arjit Singh",
        description:"Artist",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaO9oNwP0hT6rCxrP1_xtB2Q_ORBTsB3cmw&s",
    }, 
    {
        title:"A.R.Rahman" ,
        description:"Artist",
        imageUrl:"https://i.scdn.co/image/ab6761610000e5ebb19af0ea736c6228d6eb539c",

    }, 
    {
        title:"Shreya Ghoshal" ,
        description:"Artist",
        imageUrl:"https://www.jammable.com/cdn-cgi/image/width=640,quality=75,format=webp/https://imagecdn.voicify.ai/models/6d57c4cb-c94c-4698-a6ff-e2130d9fedc2.png",
    }, 
    {
        title:"Yo Yo Honey Singh" ,
        description:"Artist",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZopM4hXHZhSSfkrcffGI6xCD7GcuDzFGUSg&s",
    }
];
const focusCardsData = [
    {   
        title:"Peaceful Piano",
        description:"Relax and indulge with beautiful piano pieces",
        imageUrl:"https://i.scdn.co/image/ab67706f0000000283da657fca565320e9311863",
    }, 
    {
        title:"Deep Focus",
        description:"Keep calm and focus with ambient and post-rock",
        imageUrl:"https://i.scdn.co/image/ab67706f000000026020f2f6476db518ef747da4",
    }, 
    {
        title:"Instrumental Study" ,
        description:"Focus with soft study music in the background.",
        imageUrl:"https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c",

    }, 
    {
        title:"Focus Flow" ,
        description:"Uptempo instrumental hip hop beats.",
        imageUrl:"https://i.scdn.co/image/ab67706f000000028198a83727d00f09319dff2c",
    }, 
    {
        title:"Beats to think to" ,
        description:"Focus with deep techno and tech house.",
        imageUrl:"https://i.scdn.co/image/ab67706f00000002101aacff92c80b94bf1bc87c",
    }
];
const spotifyPlaylistsCardData = [
    {   
        title:"Today's Top Hits",
        description:"The Weekend is on top of the Hottest 50!",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvsAEV1PJt2hGFw702VGVhvF6HINjXoYmXw&s",
    }, 
    {
        title:"Happy Folk",
        description:"Brighten your day with a mix of folksy mood boosters.",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmd7zl5BWbM-SeMbstNnXm2xr1fVfgjTErg&s",
    }, 
    {
        title:"Feel the Beats" ,
        description:"Uplifting instrumental beats to brighten your day.",
        imageUrl:"https://i.scdn.co/image/ab67616d00001e0297dc14b838de5ca416415389",

    }, 
    {
        title:"Viral Hits" ,
        description:"The latest viral hits to get you moving.",
        imageUrl:"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da842a84c86f5b9b7701d7ae0eaa",
    }, 
    {
        title:"Chill Vibes" ,
        description:"Kick back to the best new and recent chill vibes.",
        imageUrl:"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84208adb263349d9c836439816",
    }
];
const featuredChartsCardData = [
    {   
        title:"Top Songs Global",
        description:"Your weekly update of the most played tracks right...",
        imageUrl:"https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
    }, 
    {
        title:"Top Songs USA",
        description:"Your weekly update of the most played tracks right...",
        imageUrl:"https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_us_default.jpg",
    }, 
    {
        title:"Top Songs India" ,
        description:"Your weekly update of the most played tracks right...",
        imageUrl:"https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_in_default.jpg",

    }, 
    {
        title:"Top 50 Global" ,
        description:"Your daily update of the most played tracks right...",
        imageUrl:"https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
    }, 
    {
        title:"Top 50 USA" ,
        description:"Your daily update of the most played tracks right...",
        imageUrl:"https://charts-images.scdn.co/assets/locale_en/regional/daily/region_us_default.jpg",
    }
];
const soundofIndiaCardData = [
    {   
        title:"The Sound of Mumb...",
        description:"The song that define, unite and distinguish...",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSEyy72HqYT3BBepUedIvb35q4Rxb6ufiOw&s",
    }, 
    {
        title:"Tha Sound of Kolkat...",
        description:"The song that define, unite and distinguish...",
        imageUrl:"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da845aaaf2a0986867b797b2dc6c",
    }, 
    {
        title:"The Sound of Delhi IN" ,
        description:"The song that define, unite and distinguish...",
        imageUrl:"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72cd8e1d1c350a158951c5ca1a7",

    }, 
    {
        title:"The Sound of Benglur..." ,
        description:"The song that define, unite and distinguish...",
        imageUrl:"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da843eb819beb795b77001f6c230",
    }, 
    {
        title:"The Sound of Chenn..." ,
        description:"The song that define, unite and distinguish...",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRi1kNqtExcr_I7CAt4yDvm6ULIINFkCuRwA&s",
    }
];
const Home = () => {
    return( 
        <div className="h-full w-full flex">
            {/* This first div will be the left panel */}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>
                    {/* This div is for logo */}
                    <div className="logoDiv item center justify center p-6 px-18">
                        <div className="px-3"><img src={Vibeflow_icon} alt="vibeflow icon" width={80}/></div>
                        <img src={Vibeflow} alt="vibeflow" width={115}/>
                    </div>
                    <div className="py-5 text-sm">
                        <IconText 
                            iconName={"material-symbols:home"} 
                            displayText={"Home"}
                            active
                        />
                        <IconText 
                            iconName={"material-symbols:search-rounded"} 
                            displayText={"Search"}
                        />
                        <IconText 
                            iconName={"icomoon-free:books"} 
                            displayText={"Your Library"}
                        />
                    </div>
                    <div className="pt-5 text-sm">
                        <IconText 
                            iconName={"material-symbols:add-box"} 
                            displayText={"Create Playlist"}
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
                </div>
            </div>
            {/* This second div will be the right part(main content) */}
            <div className="h-full w-4/5 bg-app-black overflow-auto"> 
                <div className="navbar w-full h-1/10 bg-black bg-opacity-50 flex items-center justify-end">
                    <div className="w-1/2 flex h-full">
                        <div className="w-3/5 flex justify-around items-center">
                            <TextWithHover displayText={"Premium"}/>
                            <TextWithHover displayText={"Support"}/>
                            <TextWithHover displayText={"Download"}/>
                            <div className="h-1/2 border-r border-white"></div>
                        </div>
                        <div className="w-2/5 flex justify-around h-full items-center">
                            <TextWithHover displayText={<Link to="/signup">Sign up</Link>}/>
                            <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                <Link to="/login">Log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content p-8 pt-0 overflow-auto">
                    <ArtistView 
                        titleText="Popular artists" 
                        cardsData={artistsCardsData}
                    />
                    <PlaylistView 
                        titleText="Focus" 
                        cardsData={focusCardsData}
                    />
                    <PlaylistView 
                        titleText="Playlists from our editors" 
                        cardsData={spotifyPlaylistsCardData}
                    />
                    <PlaylistView 
                        titleText="Featured Charts" 
                        cardsData={featuredChartsCardData}
                    />
                    <PlaylistView 
                        titleText="Sound of India" 
                        cardsData={soundofIndiaCardData}
                    />
                </div>
            </div>
        </div>

    ) 
};
const ArtistView = ({titleText, cardsData}) =>{
    return <div className="text-white mt-8">
        <div className='text-2xl font-semibold mb-5 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-white'>
            {titleText}
        </div>
        <div className='w-full flex justify-between space-x-4'>
            {
                // CardsData will be an array
                cardsData.map((item) => {
                    return <ArtistCard title={item.title} description={(item.description)} imageUrl={(item.imageUrl)}/>
                })
            }
            
        </div>
    </div>;
};
const ArtistCard = ({title, description, imageUrl}) => {
    return (
        <div className='bg-black bg-opacity-40 w-1/5 p-4 rounded-lg cursor-pointer hover:bg-opacity-80'>
            <div className='pb-4 pt-2'>
                <img 
                    className='w-full rounded-full' 
                    src={imageUrl}
                    alt="label"
                />
            </div>
            <div className='text-white font-semibold py-3'>{title}</div>
            <div className='text-gray-500 text-xs'>{description}</div>
        </div>
    )
};
const PlaylistView = ({titleText, cardsData}) =>{
    return <div className="text-white mt-8">
        <div className='text-2xl font-semibold mb-5 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-white'>{titleText}</div>
        <div className='w-full flex justify-between space-x-4'>
            {
                // CardsData will be an array
                cardsData.map((item) => {
                    return <Card title={item.title} description={(item.description)} imageUrl={(item.imageUrl)}/>
                })
            }
            
        </div>
    </div>;
};
const Card = ({title, description, imageUrl}) => {
    return (
        <div className='bg-black bg-opacity-40 w-1/5 p-4 rounded-lg cursor-pointer hover:bg-opacity-80'>
            <div className='pb-4 pt-2'>
                <img 
                    className='w-full rounded-md' 
                    src={imageUrl}
                    alt="label"
                />
            </div>
            <div className='text-white font-semibold py-3'>{title}</div>
            <div className='text-gray-500 text-xs'>{description}</div>
        </div>
    )
};
export default Home;