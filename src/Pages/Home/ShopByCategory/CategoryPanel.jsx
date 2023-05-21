import { useEffect, useState } from "react";
import CategoryToyCard from "./CategoryToyCard";
import Spinner from "../../Shared/Spinner/Spinner";

const CategoryPanel = ({ category }) => {

    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = `https://brainwave-world-server.vercel.app/toys?category=${category}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setLoading(false)
            })
    }, [url])

    console.log(toys)

    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <div>
            <h2>{category}</h2>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {
                    toys.map(toy => <CategoryToyCard
                        key={toy._id}
                        toy={toy}
                    ></CategoryToyCard>)
                }
            </div>
        </div>
    );
};

export default CategoryPanel;