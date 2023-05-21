
import SellerCard from "./SellerCard";

const ToySeller = () => {

    return (
        <div className='mt-20 w-[85%] mx-auto'>
            <div className='text-center mb-8'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3 font-playfair'>Top Seller</h2>
                <p className='text-gray font-medium'>Explore our top seller</p>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {<SellerCard></SellerCard>}
                        {<SellerCard></SellerCard>}
                        {<SellerCard></SellerCard>}
                        {<SellerCard></SellerCard>}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ToySeller;