import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toyInfo = useLoaderData();

    console.log(toyInfo);

    const { toyPhoto, toyName, sellerName, sellerEmail, toyPrice, toyRating, availableQuantity, toyDescription } = toyInfo;

    return (
        <div className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3'>Toy Details</h2>
            </div>
            <div className='mb-16'>
                <div className="card sm:card-side bg-base-100 shadow-2xl grid sm:grid-cols-2 items-center">
                    <figure>
                        <img className='w-full h-[400px] object-cover' src={toyPhoto} alt="toy image" />
                    </figure>
                    <div className="card-body">
                        <div>
                            <h2 className="card-title text-2xl font-bold hover:text-secondary-color mb-2">Toy Name: {toyName}</h2>
                            <div className='text-dark'>
                                <p><span className='font-bold'>Seller Name:</span> {sellerName}</p>
                                <p><span className='font-bold'>Seller Email:</span> {sellerEmail}</p>
                                <p><span className='font-bold'>Price: $</span>{toyPrice}</p>
                                <p className='my-1'><span className='font-bold'>Rating:</span> {toyRating}</p>
                                <p><span className='font-bold'>Available Quantity:</span> {availableQuantity}</p>
                                <p><span className='font-bold'>Detail Description:</span> {toyDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;