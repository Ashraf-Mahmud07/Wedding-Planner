import { FaArrowRightLong } from 'react-icons/fa6';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Venues = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="mt-[450px] mb-10 ">

            <Carousel responsive={responsive}>
                <div className="relative h-[418px] cursor-pointer overflow-hidden">
                    <div
                        className="absolute inset-0 "
                        style={{ backgroundImage: `url(${"https://img.freepik.com/free-photo/wedding-table-arrangement-outdoors_23-2149617132.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais"})` }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-between hover:bg-opacity-40 hover:bg-[#E8672F] opacity-0 hover:opacity-100 text-white transition-opacity">
                        <a className="btn btn-sm px-10 text-lg mt-40 rounded-2xl text-white bg-[#E8672F] hover:bg-[#d37b27]">EXPLORE VENUE <FaArrowRightLong /></a>
                        <div className='w-full flex flex-col justify-start px-10 mb-4 '>
                            <h1 className='text-white text-4xl pb-2 font-bold font-serif'>The Richland</h1>
                            <hr />
                            <p className='pt-2'>ORANGE</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[418px] cursor-pointer overflow-hidden mx-2">
                    <div
                        className="absolute inset-0 "
                        style={{ backgroundImage: `url(${"https://img.freepik.com/free-photo/decorations-made-chrysanthemums-threads-stand-along-glance-path-dark-hall_1304-3398.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais"})` }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-between hover:bg-opacity-40 hover:bg-[#E8672F] opacity-0 hover:opacity-100 text-white transition-opacity">
                        <a className="btn btn-sm px-10 text-lg mt-40 rounded-2xl text-white bg-[#E8672F] hover:bg-[#d37b27]">EXPLORE VENUE <FaArrowRightLong /></a>
                        <div className='w-full flex flex-col justify-start px-10 mb-4 '>
                            <h1 className='text-white text-4xl pb-2 font-bold font-serif'>The Richland</h1>
                            <hr />
                            <p className='pt-2'>ORANGE</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[418px] cursor-pointer overflow-hidden">
                    <div
                        className="absolute inset-0 "
                        style={{ backgroundImage: `url(${"https://img.freepik.com/free-photo/place-wedding-ceremony-with-wedding-arch-decorated-with-flowers-white-chairs-each-side-archway-outdoors-preparation-wedding-ceremony-outdoors-near-lake_613910-4241.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais"})` }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-between hover:bg-opacity-40 hover:bg-[#E8672F] opacity-0 hover:opacity-100 text-white transition-opacity">
                        <a className="btn btn-sm px-10 text-lg mt-40 rounded-2xl text-white bg-[#E8672F] hover:bg-[#d37b27]">EXPLORE VENUE <FaArrowRightLong /></a>
                        <div className='w-full flex flex-col justify-start px-10 mb-4 '>
                            <h1 className='text-white text-4xl pb-2 font-bold font-serif'>The Richland</h1>
                            <hr />
                            <p className='pt-2'>ORANGE</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[418px] cursor-pointer overflow-hidden mx-2">
                    <div
                        className="absolute inset-0 "
                        style={{ backgroundImage: `url(${"https://img.freepik.com/free-photo/arch-wedding-ceremony-decorated-with-cloth-flowers-greenery-is-pine-forest_501050-524.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais"})` }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-between hover:bg-opacity-40 hover:bg-[#E8672F] opacity-0 hover:opacity-100 text-white transition-opacity">
                        <a className="btn btn-sm px-10 text-lg mt-40 rounded-2xl text-white bg-[#E8672F] hover:bg-[#d37b27]">EXPLORE VENUE <FaArrowRightLong /></a>
                        <div className='w-full flex flex-col justify-start px-10 mb-4 '>
                            <h1 className='text-white text-4xl pb-2 font-bold font-serif'>The Richland</h1>
                            <hr />
                            <p className='pt-2'>ORANGE</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[418px] cursor-pointer overflow-hidden mx-2">
                    <div
                        className="absolute inset-0 "
                        style={{ backgroundImage: `url(${"https://img.freepik.com/free-photo/bridesmaids-dressed-pink-dresses-best-men-wedding-couple-are-happily-walking-green-yard_8353-11184.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais"})` }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-between hover:bg-opacity-40 hover:bg-[#E8672F] opacity-0 hover:opacity-100 text-white transition-opacity">
                        <a className="btn btn-sm px-10 text-lg mt-40 rounded-2xl text-white bg-[#E8672F] hover:bg-[#d37b27]">EXPLORE VENUE <FaArrowRightLong /></a>
                        <div className='w-full flex flex-col justify-start px-10 mb-4 '>
                            <h1 className='text-white text-4xl pb-2 font-bold font-serif'>The Richland</h1>
                            <hr />
                            <p className='pt-2'>ORANGE</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[418px] cursor-pointer overflow-hidden mx-2">
                    <div
                        className="absolute inset-0 "
                        style={{ backgroundImage: `url(${"https://img.freepik.com/free-photo/front-view-beautiful-bride-groom-wedding-apparel-smiling-looking-each-other-while-standing-friends_8353-11850.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais"})` }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-between hover:bg-opacity-40 hover:bg-[#E8672F] opacity-0 hover:opacity-100 text-white transition-opacity">
                        <a className="btn btn-sm px-10 text-lg mt-40 rounded-2xl text-white bg-[#E8672F] hover:bg-[#d37b27]">EXPLORE VENUE <FaArrowRightLong /></a>
                        <div className='w-full flex flex-col justify-start px-10 mb-4 '>
                            <h1 className='text-white text-4xl pb-2 font-bold font-serif'>The Richland</h1>
                            <hr />
                            <p className='pt-2'>ORANGE</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[418px] cursor-pointer overflow-hidden mx-2">
                    <div
                        className="absolute inset-0 "
                        style={{ backgroundImage: `url(${"https://img.freepik.com/free-photo/front-view-people-posing-together_23-2149956426.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais"})` }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-between hover:bg-opacity-40 hover:bg-[#E8672F] opacity-0 hover:opacity-100 text-white transition-opacity">
                        <a className="btn btn-sm px-10 text-lg mt-40 rounded-2xl text-white bg-[#E8672F] hover:bg-[#d37b27]">EXPLORE VENUE <FaArrowRightLong /></a>
                        <div className='w-full flex flex-col justify-start px-10 mb-4 '>
                            <h1 className='text-white text-4xl pb-2 font-bold font-serif'>The Richland</h1>
                            <hr />
                            <p className='pt-2'>ORANGE</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[418px] cursor-pointer overflow-hidden mx-2">
                    <div
                        className="absolute inset-0 "
                        style={{ backgroundImage: `url(${"https://img.freepik.com/free-photo/front-view-stylish-friends-newlyweds-festival-outfits-hugging-each-other-smiling-posing-camera-during-wedding-walking-park-background_8353-12427.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais"})` }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-between hover:bg-opacity-40 hover:bg-[#E8672F] opacity-0 hover:opacity-100 text-white transition-opacity">
                        <a className="btn btn-sm px-10 text-lg mt-40 rounded-2xl text-white bg-[#E8672F] hover:bg-[#d37b27]">EXPLORE VENUE <FaArrowRightLong /></a>
                        <div className='w-full flex flex-col justify-start px-10 mb-4 '>
                            <h1 className='text-white text-4xl pb-2 font-bold font-serif'>The Richland</h1>
                            <hr />
                            <p className='pt-2'>ORANGE</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[418px] cursor-pointer overflow-hidden mx-2">
                    <div
                        className="absolute inset-0 "
                        style={{ backgroundImage: `url(${"https://img.freepik.com/free-photo/full-shot-people-posing-wedding_23-2149956421.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais"})` }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-between hover:bg-opacity-40 hover:bg-[#E8672F] opacity-0 hover:opacity-100 text-white transition-opacity">
                        <a className="btn btn-sm px-10 text-lg mt-40 rounded-2xl text-white bg-[#E8672F] hover:bg-[#d37b27]">EXPLORE VENUE <FaArrowRightLong /></a>
                        <div className='w-full flex flex-col justify-start px-10 mb-4 '>
                            <h1 className='text-white text-4xl pb-2 font-bold font-serif'>The Richland</h1>
                            <hr />
                            <p className='pt-2'>ORANGE</p>
                        </div>
                    </div>
                </div>
            </Carousel>
            <div className='w-[950px] text-center mx-auto my-10 lg:my-28'>
                <h1 className='text-9xl font-serif text-[#1A4122] mb-8'>Far More Than Just Business</h1>
                <p className='text-xl font-serif text-[#1e3b23]'>The way you do anything is the way you do everything. We haven’t cracked the code on catering; we simply care unreasonably about every aspect of what we do. We care about people as much as we care about details, and we absolutely refuse to compromise on making your day anything but the best. We’ve got your back from the initial idea to the final farewell!</p>
            </div>
        </div>
    );
};

export default Venues;