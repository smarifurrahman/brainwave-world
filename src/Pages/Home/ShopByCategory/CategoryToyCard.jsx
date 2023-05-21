import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const CategoryToyCard = ({ toy }) => {
    const { _id, toyPhoto, toyName, toyPrice, toyRating } = toy;

    return (
        <div className="card min-w-[300px] bg-base-100 shadow-xl">
            <figure>
                <img className='h-[250px] w-full object-cover' src={toyPhoto} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="font-bold text-xl text-center">{toyName}</h2>

                <h4 className='font-semibold mt-4'>Price: ${toyPrice}</h4>

                <div className='mt-4 flex gap-3 items-center'>
                    <Rating style={{ maxWidth: 100 }} value={toyRating} readOnly />
                    <span>{toyRating}</span>
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/toys/${_id}`} className="btn btn-ghost btn-xs bg-primary-color">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryToyCard;