
const AddToy = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col ">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form className="card-body p-12 pb-0 mb-6 sm:w-[600px]">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Add a Toy</h1>
                            <hr className='mt-5' />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Photo</span>
                                </label>
                                <input type="text" name='toyPhoto' placeholder="url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input type="text" name='toyName' placeholder="title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" name='sellerName' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="text" name='sellerEmail' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Sub-Category</span>
                                </label>
                                <select name="toyCategory" className="select select-bordered w-full max-w-xs" required>
                                    <option disabled selected>Select Sub-Category</option>
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
                                <input type="text" name='toyPrice' placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Rating</span>
                                </label>
                                <input type="text" name='toyRating' placeholder="rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="text" name='availableQuantity' placeholder="quantity" className="input input-bordered" required />
                            </div>
                            <div className="form-control sm:col-span-2">
                                <label className="label">
                                    <span className="label-text">Detail Description</span>
                                </label>
                                <textarea name="toyDescription" className="h-32 input input-bordered resize-none" required />
                            </div>
                        </div>

                        <div className="form-control mt-4">
                            <button className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color">Add Toy</button>
                        </div>
                        <p className='text-pink-start text-center mt-4'>error</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;