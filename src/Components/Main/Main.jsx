
import Contact from '../Contact/Contact';
import Cooking from '../Cooking/Cooking';
import FoodSlice from '../Food/FoodSlice';
import Review from '../Reviews/Review';
import Services from '../Services/Services';
import Venues from '../Venues/Venues';
import AdVideo from '../VideoSection/AdVideo';
import Weddings from '../Wedding/Weddings';
import WeddingsFile from '../Wedding/WeddingsFile';

const Main = () => {
    return (
        <div>
            <FoodSlice/>
            <WeddingsFile/>
            <Weddings/>
            <Venues/>
            <AdVideo/>
            <Services/>
            <Review/>
            <Cooking/>
            <Contact/>
        </div>
    );
};

export default Main;