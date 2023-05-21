import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    const toys = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Gallery
                toys={toys}
            >
            </Gallery>
        </div>
    );
};

export default Home;