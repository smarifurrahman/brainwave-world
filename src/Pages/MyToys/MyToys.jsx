import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ToysRow from "./ToysRow";
import Spinner from "../Shared/Spinner/Spinner";
import Swal from "sweetalert2";

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [asc, setAsc] = useState(true);

    const url = `https://brainwave-world-server.vercel.app/toys?email=${user.email}&sort=${asc ? 'asc' : 'desc'}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setLoading(false)
            })
    }, [url])

    console.log(toys);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brainwave-world-server.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'this toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                        }
                    })
            }
        });
    }

    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <div className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3'>My Toys</h2>
            </div>
            <div className="overflow-x-auto w-full">
                <div className="flex justify-end mb-5">
                    <button
                        className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color"
                        onClick={() => setAsc(!asc)}>
                        {asc ? 'Price: High to Low' : 'Price: Low to High'}
                    </button>
                </div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Information</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <ToysRow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                            ></ToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyToys;