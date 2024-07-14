import { FaArrowRightLong } from "react-icons/fa6";

const FoodSlice = () => {
    return (
        <div className="my-28 flex md:flex-row flex-col gap-5 p-3">
            <div className="text-center">
                <p className="text-2xl text-[#647B4E]">WELCOME TO 24 CARROTS</p>
                <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-[#1A4122] font-serif ">Remarkable Catering & Events</h1>
                <p className="md:text-2xl text-lg text-wrap">24 Carrots is the premier catering and events company of choice in Southern California. We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, driven by our passion for life’s special occasions.</p>
                <a className="btn btn-sm mt-3 text-lg rounded-2xl text-white bg-[#E8672F] hover:bg-[#d37b27]">GET IN TOUCH <FaArrowRightLong /></a>
            </div>
            <div>
                <div className="carousel w-full h-full my-auto lg:rounded-tl-[320px] md:rounded-tl-[220px] sm:rounded-tl-[140px] rounded-tl-[100px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/free-photo/top-view-fried-potatoes-with-seasonings-bread-loafs-different-vegetables-dark-desk_140725-115309.jpg?size=626&ext=jpg&ga=GA1.2.22933237.1708163458&semt=ais" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/free-photo/top-view-fried-potatoes-with-seasonings-bread-loafs-different-vegetables-dark-desk_140725-115312.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/free-photo/black-metallic-pan-full-mear-sauteed-vegetables_114579-1984.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141351.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodSlice;