import { Link } from "react-router-dom";

const ToysRow = ({ toy, handleDelete }) => {

    const { _id, toyPhoto, toyName, toyCategory, toyPrice, availableQuantity, toyRating } = toy;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-6">
                    <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                            {toyPhoto && <img src={toyPhoto} alt="toy photo" />}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50">{toyCategory}</div>
                    </div>
                </div>
            </td>
            <td>{toyPrice}</td>
            <td>{availableQuantity}</td>
            <td>{toyRating}</td>
            <th>
                <div className="flex flex-col gap-2 w-fit">
                    <Link to={`/updateToy/${_id}`} className="btn btn-ghost btn-xs bg-primary-color">Update</Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs bg-secondary-color">Delete</button>
                </div>
            </th>
        </tr>
    );
};

export default ToysRow;