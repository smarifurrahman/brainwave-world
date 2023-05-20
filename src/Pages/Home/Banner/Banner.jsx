import banner1 from '../../../assets/banner/banner-1.jpg';
import banner2 from '../../../assets/banner/banner-2.jpg';
import banner3 from '../../../assets/banner/banner-3.jpg';
import banner4 from '../../../assets/banner/banner-4.jpg';

import { HiArrowRight } from "react-icons/hi";

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full h-[540px] object-cover" />
                <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full flex items-center">
                    <div className=' w-[85%] mx-auto'>
                        <div className='w-3/4 md:w-1/2'>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold font-playfair'>Unlock the Infinite Potential of Young Minds</h1>
                            <p className='font-medium my-5'>Step into Brainwave World, a Captivating Online Universe Filled with Educational Toys and Boundless Discovery!</p>
                            <a className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color px-6">
                                View Toys
                                <span className='ml-2'>
                                    <HiArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-14 bottom-3">
                    <a href="#slide4" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full h-[540px] object-cover" />
                <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full flex items-center">
                    <div className=' w-[85%] mx-auto'>
                        <div className='w-3/4 md:w-1/2'>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold font-playfair'>Unlock the Infinite Potential of Young Minds</h1>
                            <p className='font-medium my-5'>Step into Brainwave World, a Captivating Online Universe Filled with Educational Toys and Boundless Discovery!</p>
                            <a className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color px-6">
                                View Toys
                                <span className='ml-2'>
                                    <HiArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-14 bottom-3">
                    <a href="#slide1" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full h-[540px] object-cover" />
                <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full flex items-center">
                    <div className=' w-[85%] mx-auto'>
                        <div className='w-3/4 md:w-1/2'>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold font-playfair'>Unlock the Infinite Potential of Young Minds</h1>
                            <p className='font-medium my-5'>Step into Brainwave World, a Captivating Online Universe Filled with Educational Toys and Boundless Discovery!</p>
                            <a className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color px-6">
                                View Toys
                                <span className='ml-2'>
                                    <HiArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-14 bottom-3">
                    <a href="#slide2" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full h-[540px] object-cover" />
                <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full flex items-center">
                    <div className=' w-[85%] mx-auto'>
                        <div className='w-3/4 md:w-1/2'>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold font-playfair'>Unlock the Infinite Potential of Young Minds</h1>
                            <p className='font-medium my-5'>Step into Brainwave World, a Captivating Online Universe Filled with Educational Toys and Boundless Discovery!</p>
                            <a className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color px-6">
                                View Toys
                                <span className='ml-2'>
                                    <HiArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-14 bottom-3">
                    <a href="#slide3" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;