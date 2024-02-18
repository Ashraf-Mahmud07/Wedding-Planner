import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { FaArrowRight } from "react-icons/fa6";

const images = [
    'https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?w=360&t=st=1708236865~exp=1708237465~hmac=cb46c4abac74b526056db81bfee93a30b11f221376c060426d2b7293ac12219d',
    'https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=740',
    'https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?w=740&t=st=1708238646~exp=1708239246~hmac=18f1b57360bf26aa74eb27226b1caa6e4140c9510420706dd2b18194afbaef42',
];

const Services = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change the interval as needed (in milliseconds)

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='w-full mx-auto my-20'>
            <div className='flex w-[1200px] font-serif  mx-auto gap-10 justify-center'>
                <div className='space-y-9 w-[300px] mt-10'>
                    <div className='space-y-8 mt-10'>
                        <h1 className={classNames('text-2xl text-green-800', { 'hovered': isHovered })}>
                            Gourmet Catering
                            {isHovered && <span className='animate-ping bouceOut absolute inline-block h-4 w-4 rounded-full bg-red-500'></span>}
                        </h1>
                        <p className='text-slate-600'>Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.</p>
                        <button
                            className='btn border-orange-700 rounded-full text-orange-700 bg-white'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Learn More<span className='text-xl'><FaArrowRight /></span>
                        </button>
                    </div>

                    <div className='space-y-3'>
                        <h1 className='text-2xl text-green-800'>Bar Service</h1>
                        <p className='text-slate-600'>Our sophisticated flavor expertise enables us to create inventive concoctions that generate buzz in more ways than one!</p>
                        <button className='btn border-orange-700 rounded-full text-orange-700 bg-white'>Learn More<span className='text-xl'><FaArrowRight /></span></button>
                    </div>
                </div>
                <div className="relative w-[400px] h-[560px] rounded-t-full overflow-hidden">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className={classNames(
                                'absolute h-[560px] object-cover transition-opacity duration-1000',
                                { 'opacity-100': index === currentImage },
                                { 'opacity-0': index !== currentImage }
                            )}
                        />
                    ))}
                </div>

                <div className='space-y-5 w-[300px]'>
                    <div className='space-y-8 mt-10'>
                        <h1 className='text-2xl text-green-800'>Staffing </h1>
                        <p className='text-slate-600'>The hand-selected team at 24 Carrots are just as important to our reputation as our gourmet food. Our staff is certainly the best at what they do, and you’ll work with professionals who genuinely care about the success of your event!</p>
                        <button className='btn border-orange-700 rounded-full text-orange-700 bg-white'>Learn More<span className='text-xl'><FaArrowRight /></span></button>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-2xl text-green-800'>Event Production</h1>
                        <p className='text-slate-600'>If mind-blowing spectacles and immersive guest experiences are what you’re after, the specialists at 24 Carrots can pull it off on an epic scale!</p>
                        <button className='btn border-orange-700 rounded-full text-orange-700 bg-white'>Learn More<span className='text-xl'><FaArrowRight /></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;