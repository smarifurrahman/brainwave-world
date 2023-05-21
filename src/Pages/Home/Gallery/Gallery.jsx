import { useContext } from "react";
import { ToyContext } from "../Home/Home";

const Gallery = () => {
    const { toys } = useContext(ToyContext);
    const imgArray = toys.map(toy => toy.toyPhoto);

    return (
        <section className="text-gray-600 body-font mt-20 w-[85%] mx-auto">
            <div className='text-center mb-8'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3 font-playfair'>Toy Gallery</h2>
                <p className='text-gray font-medium'>Explore our toy gallery</p>
            </div>

            <div className="container mx-auto">
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-[180px] sm:h-[220px] object-center block" src={imgArray[0]} />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-[180px] sm:h-[220px] object-center block" src={imgArray[1]} />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-[260px] sm:h-[300px] object-cover object-center block" src={imgArray[2]} />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-[260px] sm:h-[300px] object-cover object-center block" src={imgArray[3]} />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-[180px] sm:h-[220px] object-center block" src={imgArray[4]} />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-[180px] sm:h-[220px] object-center block" src={imgArray[5]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;