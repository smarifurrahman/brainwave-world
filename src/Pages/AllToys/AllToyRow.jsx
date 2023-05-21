import { Link } from "react-router-dom";

const AllToyRow = ({ toy, index }) => {

    const { _id, toyName, toyCategory, toyPrice, availableQuantity, sellerName } = toy;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{toyCategory}</td>
            <td>{toyPrice}</td>
            <td>{availableQuantity}</td>
            <th>
                <div className="flex flex-col gap-2 w-fit">
                    <Link to={`/toys/${_id}`} className="btn btn-ghost btn-xs bg-primary-color">View Details</Link>
                </div>
            </th>
        </tr>
    );
};

export default AllToyRow;