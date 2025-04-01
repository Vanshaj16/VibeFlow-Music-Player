import LoggedInContainer from '../containers/LoggedInContainer';

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
    return (
        <LoggedInContainer curActiveScreen="home">
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
        </LoggedInContainer>
    );
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