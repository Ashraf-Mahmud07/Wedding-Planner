import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Review = () => {
    return (
        <div className="bg-[#1A4122] pt-20 pb-80">
            <div className="text-center w-1/2 mx-auto">
                <h1 className="text-6xl text-center text-white font-serif">Our Happy Clients</h1>
                <p className="text-lg pt-5 w-3/4 mx-auto pb-10 text-[#B4C7A3]">Food may be our love language, but words of affirmation always make us ecstatic! Read what our happy clients have to say about how we made their day great.</p>
            </div>
            <Carousel className="mx-auto w-[60%] mt-4">
                <div className="flex justify-start items-center gap-8">
                    <img className="w-50%" src="https://img.freepik.com/free-photo/bridesmaids-dressed-pink-dresses-best-men-wedding-couple-are-happily-walking-green-yard_8353-11184.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais" />
                    <div className="flex flex-col gap-y-20">
                        <h1 className="text-white text-start text-2xl font-serif">I could not stop getting compliments on how delicious the food was! My [guests] still texted me the day after to tell me that the food was amazing.</h1>
                        <div className="font-serif flex flex-col justify-start items-start">
                            <p className="text-2xl text-white font-bold">Ashraf & Sraboni</p>
                            <p className="text-slate-400">Franciscan Gardens</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-8">
                    <img className="w-50" src="https://img.freepik.com/free-photo/front-view-beautiful-bride-groom-wedding-apparel-smiling-looking-each-other-while-standing-friends_8353-11850.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais" />
                    <div className="flex flex-col gap-y-20">
                        <h1 className="text-white text-start text-2xl font-serif">I could not stop getting compliments on how delicious the food was! My [guests] still texted me the day after to tell me that the food was amazing.</h1>
                        <div className="font-serif flex flex-col justify-start items-start">
                            <p className="text-2xl text-white font-bold">Ashraf & Sraboni</p>
                            <p className="text-slate-400">Franciscan Gardens</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-8">
                    <img className="w-50" src="https://img.freepik.com/free-photo/front-view-people-posing-together_23-2149956426.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais" />
                    <div className="flex flex-col gap-y-20">
                        <h1 className="text-white text-start text-2xl font-serif">I could not stop getting compliments on how delicious the food was! My [guests] still texted me the day after to tell me that the food was amazing.</h1>
                        <div className="font-serif flex flex-col justify-start items-start">
                            <p className="text-2xl text-white font-bold">Ashraf & Sraboni</p>
                            <p className="text-slate-300">Franciscan Gardens</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-8">
                    <img className="w-50" src="https://img.freepik.com/free-photo/front-view-stylish-friends-newlyweds-festival-outfits-hugging-each-other-smiling-posing-camera-during-wedding-walking-park-background_8353-12427.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais" />
                    <div className="flex flex-col gap-y-20">
                        <h1 className="text-white text-start text-2xl font-serif">I could not stop getting compliments on how delicious the food was! My [guests] still texted me the day after to tell me that the food was amazing.</h1>
                        <div className="font-serif flex flex-col justify-start items-start">
                            <p className="text-2xl text-white font-bold">Ashraf & Sraboni</p>
                            <p className="text-slate-300">Franciscan Gardens</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-8">
                    <img className="w-50" src="https://img.freepik.com/free-photo/full-shot-people-posing-wedding_23-2149956421.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais" />
                    <div className="flex flex-col gap-y-20">
                        <h1 className="text-white text-start text-2xl font-serif">I could not stop getting compliments on how delicious the food was! My [guests] still texted me the day after to tell me that the food was amazing.</h1>
                        <div className="font-serif flex flex-col justify-start items-start">
                            <p className="text-2xl text-white font-bold">Ashraf & Sraboni</p>
                            <p className="text-slate-300">Franciscan Gardens</p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Review;
