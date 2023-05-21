import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import { createContext } from "react";


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
            </ToyContext.Provider>
        </div>
    );
};

export default Home;