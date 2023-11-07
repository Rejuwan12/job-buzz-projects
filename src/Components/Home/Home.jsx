import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Section1 from "./Sections/Section1";
import Cetegary from "./Tab/Cetegary";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Job Buzz | Home</title>
            </Helmet>
           <Banner/>
           <Cetegary/>
           <Section1/>
        </div>
    );
};

export default Home;
