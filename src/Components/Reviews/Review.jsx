import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Review = () => {
    return (
        <div className="bg-[#1A4122] py-20">
            <div className="text-center w-1/2 mx-auto">
                <h1 className="text-6xl text-center text-white font-serif">Our Happy Clients</h1>
                <p className="text-lg pt-5 w-3/4 mx-auto pb-10 text-[#B4C7A3]">Food may be our love language, but words of affirmation always make us ecstatic! Read what our happy clients have to say about how we made their day great.</p>
            </div>
            <Carousel className="mx-auto w-[50%]">
                <div className="flex justify-center items-center ">
                    <img className="w-50%" src="https://img.freepik.com/free-photo/romantic-couple-kissing-medium-shot_23-2149956420.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais" />
                    <div>
                        <h1 className="text-white text-center">I could not stop getting compliments on how delicious the food was! My [guests] still texted me the day after to tell me that the food was amazing.</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <img className="w-50" src="https://img.freepik.com/free-photo/romantic-couple-kissing-medium-shot_23-2149956420.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais" />
                    <div>
                        <h1>I could not stop getting compliments on how delicious the food was! My [guests] still texted me the day after to tell me that the food was amazing.</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <img className="w-50" src="https://img.freepik.com/free-photo/romantic-couple-kissing-medium-shot_23-2149956420.jpg?size=626&ext=jpg&uid=R138265752&ga=GA1.1.22933237.1708163458&semt=ais" />
                    <div>
                        <h1>I could not stop getting compliments on how delicious the food was! My [guests] still texted me the day after to tell me that the food was amazing.</h1>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Review;
