import { useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";
import Spinner from "../Shared/Spinner/Spinner";

const AllToys = () => {

    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://brainwave-world-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                if (data.length > 20) {
                    const filteredToys = data.slice(0, 20);
                    setToys(filteredToys);
                    console.log(filteredToys);
                }
                else {
                    console.log(data);
                    setToys(data);
                }
                setLoading(false)
            })
    }, [])


    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <div className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3'>My Toys</h2>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, index) => <AllToyRow
                                key={toy._id}
                                toy={toy}
                                index={index}
                            ></AllToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllToys;