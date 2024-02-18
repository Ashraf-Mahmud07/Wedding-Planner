import { FaArrowRightLong } from 'react-icons/fa6';
import YouTube from 'react-youtube';

const AdVideo = () => {
    const videoId = "7gPP9hsV4a0"
    return (
        <div>
            <div className='flex justify-center items-center'>
                <YouTube iframeClassName='lg:w-[1024px] lg:h-[550px]' videoId={videoId} />
            </div>
            <div className='w-[950px] text-center mx-auto space-y-8 my-10 lg:my-28'>
                <h1 className='text-8xl font-serif text-[#1A4122] '>Great Food & A Whole Lot More</h1>
                <p className='text-lg font-serif text-[#1e3b23]'>Catering is just the beginning. Sure, we love astonishing your guests with attentive service, thoughtful food, and an inviting environment. But what really matters most is helping you create memories that will last for a lifetime. Our industry experts think of all the little things that turn an ordinary event into an unforgettable experience.</p>
                <a className="btn btn-sm px-10 text-lg rounded-2xl text-white bg-[#E8672F] hover:bg-[#d37b27]">EXPLORE VENUE <FaArrowRightLong /></a>
            </div>
        </div>

    );
};

export default AdVideo;