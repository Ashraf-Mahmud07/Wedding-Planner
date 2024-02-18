
import FoodSlice from '../Food/FoodSlice';
import Review from '../Reviews/Review';
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
            <Review/>
        </div>
    );
};

export default Main;