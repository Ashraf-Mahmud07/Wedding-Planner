/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

// eslint-disable-next-line no-unused-vars
const Content = ({ header, title, description, img }) => (
    <div className="ml-8 space-y-5 ">
        <h1 className="pt-3">{title}</h1>
        <p className="text-lg">{description}</p>
        <div className="mt-4">
            <button className="text-white bg-[#C15627] hover:bg-[#E8672F] gap-2 btn rounded-full flex">LEARN MORE <span className='text-xl'><FaArrowRight/> </span></button>
        </div>
    </div>
);

const WeddingsFile = () => {
    const [selectedTab, setSelectedTab] = useState(1);

    const tabs = [
        { id: 1, header: 'Weddings', title: 'EXCEPTIONAL WEDDINGS', description: 'The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience.', img: 'https://img.freepik.com/free-photo/beautiful-couple-having-their-wedding-beach_23-2149043942.jpg?w=360&t=st=1708183461~exp=1708184061~hmac=ad138852c76b5faaf79f5c8370613e2a1e61f0326f26d5c68e69db97ce837a5e' },
        { id: 2, header: 'Social', title: 'INCOMPARABLE SOCIAL EVENTS ', description: 'We sweat the small stuff, so you don’t have to. For all of life’s special occasions, we give your anniversary, shower, or birthday party the attention it deserves, allowing you to focus on being present with your guest!', img: 'https://img.freepik.com/free-photo/side-view-cocktail-shots-with-slice-lemon-kiwi-slice-candles-bar_176474-3056.jpg?w=740&t=st=1708189005~exp=1708189605~hmac=08e2c47774cada05c6cff1947988b018596631e7bcfc0903b2b9204e0c0a4141' },
        { id: 3, header: 'Corporate', title: 'ONE-OF-A-KIND CORPORATE EVENTS', description: 'Our job is to make you look good. From office lunches to large-scale corporate events, we’ve made our business out of making your business shine.', img: 'https://img.freepik.com/free-photo/business-people-shaking-hand-waiting-area_107420-95864.jpg?w=360&t=st=1708189280~exp=1708189880~hmac=2c5e45a377a77a5d0abeb233d5c49182ba4e0d0df6f337a75cc8cf7d0dda6866' },
        { id: 4, header: 'Venues', title: 'EXCLUSIVE SOCIAL VENUES', description: ' We don’t put you in a box. Each venue is unique to each party, and our curated list of event spaces and venue partners offers easy access with personalized service at Southern California’s premier locations.', img: 'https://img.freepik.com/free-photo/wedding-setting_1127-2968.jpg?w=360&t=st=1708189403~exp=1708190003~hmac=b2f4b524c1f461b6b541ae2a0f6e98246a27e57a422ec3f68edbbc59254d477e' },
    ];

    return (
        <div className='w-[900px] mx-auto font-serif my-32'>
            <h1 className='text-7xl ml-96 leading-sung'>Making Every<br /> Experience<br /> Magical</h1>
            <div className="flex mt-8">
                <div className="flex flex-col justify-start items-start">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={` text-xl py-2  ml-96 mb-4 text-black ${selectedTab === tab.id ? 'text-black hover:text-orange-700' : 'text-gray-500'}`}
                            onClick={() => setSelectedTab(tab.id)}
                        >
                            {tab.header}
                        </button>
                    ))}
                </div>
                <div>
                    {selectedTab !== null && (
                        <div className=' flex justify-between gap-52'>
                            <img
                                className='ml-[-590px] mt-[-290px] w-[100%] h-[600px] rounded-t-full'
                                src={tabs[selectedTab - 1].img}
                                alt=""
                            />
                            <div className='ml-3'>
                                <Content img={tabs[selectedTab - 1].img} title={tabs[selectedTab - 1].title} description={tabs[selectedTab - 1].description} />
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div>

    );
};

export default WeddingsFile;