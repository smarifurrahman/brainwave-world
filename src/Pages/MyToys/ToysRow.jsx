import Swal from 'sweetalert2';

const ToysRow = ({ toy }) => {
    
    const { _id, toyPhoto, toyName, toyCategory, toyPrice, availableQuantity, toyRating } = toy;

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

                fetch(`http://localhost:5000/toys/${id}`, {
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
                        }
                    })
            }
        });
    }

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
                    <button className="btn btn-ghost btn-xs bg-primary-color">Update</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs bg-secondary-color">Delete</button>
                </div>
            </th>
        </tr>
    );
};

export default ToysRow;