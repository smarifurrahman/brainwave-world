import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ToysRow from "./ToysRow";
import Spinner from "../Shared/Spinner/Spinner";

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    const url = `http://localhost:5000/toys?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setLoading(false)
            })
    }, [url])

    console.log(toys);

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
                            <th>Toy Information</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <ToysRow
                                key={toy._id}
                                toy={toy}
                            ></ToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyToys;