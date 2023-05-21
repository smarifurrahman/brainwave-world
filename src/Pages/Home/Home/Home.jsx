import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import { createContext } from "react";
import ToySeller from "../ToySeller/ToySeller";


export const ToyContext = createContext(null);


const Home = () => {
    const toys = useLoaderData();
    const toyInfo = { toys };

    return (
        <div>
            <Banner></Banner>
            <ToyContext.Provider value={toyInfo} >
                <Gallery></Gallery>
                <ShopByCategory></ShopByCategory>
                <ToySeller></ToySeller>
            </ToyContext.Provider>
        </div>
    );
};

export default Home;