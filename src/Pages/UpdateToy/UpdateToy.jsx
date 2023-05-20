import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
    const [error, setError] = useState('');
    const toy = useLoaderData();
    const { _id, toyPhoto, toyName, toyCategory, toyPrice, availableQuantity, toyRating } = toy;


    const handleUpdateToy = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const toyPhoto = form.toyPhoto.value;
        const toyName = form.toyName.value;
        const toyCategory = form.toyCategory.value;
        const toyPrice = form.toyPrice.value;
        const toyRating = form.toyRating.value;
        const availableQuantity = form.availableQuantity.value;

        fetch(`https://brainwave-world-server.vercel.app/toys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ toyPhoto, toyName, toyCategory, toyPrice, toyRating, availableQuantity, })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // setToys(newToys);
                    console.log('success');
                    history.back();
                }
            })

    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col ">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdateToy} className="card-body p-12 pb-0 mb-6 sm:w-[600px]">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Update Toy Info</h1>
                            <hr className='mt-5' />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Photo</span>
                                </label>
                                <input type="text" name='toyPhoto' placeholder="url" className="input input-bordered" required defaultValue={toyPhoto} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input type="text" name='toyName' placeholder="title" className="input input-bordered" required defaultValue={toyName} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Sub-Category</span>
                                </label>
                                <select name='toyCategory' className="select select-bordered w-full max-w-xs" required defaultValue={toyCategory}>
                                    <option disabled>Select Sub-Category</option>
                                    <option>Science Kits</option>
                                    <option>Math Learning Toys</option>
                                    <option>Engineering Kits</option>
                                    <option>Engineering Tools</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Price</span>
                                </label>
                                <input type="text" name='toyPrice' placeholder="price" className="input input-bordered" required defaultValue={toyPrice} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Rating</span>
                                </label>
                                <input type="text" name='toyRating' placeholder="rating" className="input input-bordered" required defaultValue={toyRating} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="text" name='availableQuantity' placeholder="quantity" className="input input-bordered" required defaultValue={availableQuantity} />
                            </div>
                        </div>

                        <div className="form-control mt-4">
                            <button className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color">Update Toy</button>
                        </div>
                        <p className='text-pink-start text-center mt-4'>{error}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;