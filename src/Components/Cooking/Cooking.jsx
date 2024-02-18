import { FaArrowRightLong } from "react-icons/fa6";

const Cooking = () => {
    return (
        <div className="-mt-64 flex flex-col justify-center">
            <div>
                <h1 className="text-7xl font-serif text-center text-white">What’s Cookin’</h1>
            </div>
            <div className="w-[1220px] flex gap-4 mx-auto mt-16 font-serif">
                <div className="w-[60%]">
                    <div className="relative h-[320px] cursor-pointer overflow-hidden mx-2 mb-5">
                        <div
                            className="absolute inset-0 "
                            style={{ backgroundImage: `url(${"https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?size=626&ext=jpg&ga=GA1.2.2293323"})` }}
                        ></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center hover:bg-opacity-40 hover:bg-[#e8602f] opacity-0 hover:opacity-100 text-white transition-opacity">
                            <a className="btn btn-sm px-5 text-lg font-sans font-bold rounded-2xl text-white  hover:bg-[#a65f39] bg-transparent">Read More <FaArrowRightLong /></a>
                        </div>
                    </div>
                    <p className="bg-[#C15627] mb-4 font-serif text-white text-start px-3 rounded-full w-64">24 CARROTS CATERING CATERING</p>
                    <div className="">
                        <h1 className="text-3xl py-2">Setting Your Holiday Table</h1>
                        <p>From the first inquiry to final details, we are proud to provide full-service catering, making you feel like a guest at your own event…</p>
                    </div>
                </div>
                <div className="w-[40%]">
                    <div className="relative h-[320px] cursor-pointer overflow-hidden mx-2 mb-5">
                        <div
                            className="absolute inset-0 "
                            style={{ backgroundImage: `url(${"https://img.freepik.com/free-photo/happy-bridesmaids-best-men-wedding-couple-is-celebrating-wedding-day-outdoors-with-pouring-out-champagne_8353-11270.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais"})` }}
                        ></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center hover:bg-opacity-40 hover:bg-[#e8602f] opacity-0 hover:opacity-100 text-white transition-opacity">
                            <a className="btn btn-sm px-5 text-lg font-sans font-bold rounded-2xl text-white  hover:bg-[#a65f39] bg-transparent">Read More <FaArrowRightLong /></a>
                        </div>
                    </div>
                    <p className="bg-black mb-4 font-serif text-white text-start px-3 rounded-full w-80">24 CARROTS CATERING FEATURED VENUES</p>
                    <div className="">
                        <h1 className="text-3xl py-2">The BEST Venues for Big Holiday Bashes</h1>
                        <p>Make the most the holiday season by thinking BIG! Invite everyone from friends family, clients and the entire company to join in on the fun…</p>
                    </div>
                </div>
            </div>
            <a className="btn btn-sm px-5 text-lg w-72 my-10 border-[#ad5e32] mx-auto rounded-2xl text-[#ad5e32] hover:bg-[#a65f39] hover:text-white bg-transparent">MORE FROM THE BLOG <FaArrowRightLong /></a>
        </div>
    );
};

export default Cooking;