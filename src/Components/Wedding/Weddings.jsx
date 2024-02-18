import { FaArrowRightLong } from "react-icons/fa6";
const Weddings = () => {
    return (
        <div className="mx-auto relative">
            <div><img className="w-full h-[750px]" src="https://img.freepik.com/free-photo/medium-shot-married-couple-kissing_23-2149956436.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais" alt="" /></div>
            <div className="absolute lg:left-[680px]  w-[610px] h-[600px] rounded-full px-10 -mt-40  bg-white">
                <div className="z-10 space-y-10 text-center pt-24">
                    <p className="text-xl text-[#99A88A]">VENUES</p>
                    <h1 className="text-7xl font-serif font-bold text-[#1A4122]">Unforgettable Venues</h1>
                    <p>24 Carrots is the exclusive or preferred caterer at Southern California’s most spectacular properties. From intimate understated spaces to large and luxurious, we’ll help you find the event venue that makes your heart skip a beat.</p>
                    <a className="btn  px-10 text-lg rounded-full text-white bg-[#E8672F] hover:bg-[#d37b27]">EXPLORE VENUES <FaArrowRightLong /></a>
                </div>
            </div>
        </div>
    );
};

export default Weddings;