import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toyInfo = useLoaderData();

    console.log(toyInfo);

    return (
        <div>

        </div>
    );
};

export default ToyDetails;