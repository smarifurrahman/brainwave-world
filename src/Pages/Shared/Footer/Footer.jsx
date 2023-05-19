import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className='mt-24 py-24 bg-dark'>
            <div className='w-[85%] mx-auto grid lg:grid-cols-6 gap-14 text-footer-white'>
                <div className='col-span-2'>
                    <h3 className='text-white mb-5 text-2xl font-bold'>Brainwave World</h3>
                    <p className='mb-5 text-justify'>Embark on a Journey of Knowledge and Wonder at Brainwave World: Where Learning and Fun Intersect with an Array of Engaging Educational Toys!</p>
                    <img src="/assets/Icons/social.png" alt="" />
                </div>
                <div className='flex flex-col gap-4'>
                    <h5 className='text-lg font-semibold text-white'>Company</h5>
                    <Link>About Us</Link>
                    <Link>Reviews</Link>
                    <Link>Customers</Link>
                    <Link>Sellers</Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <h5 className='text-lg font-semibold text-white'>Product</h5>
                    <Link>Latest Toys</Link>
                    <Link>Prototype</Link>
                    <Link>Pricing</Link>
                    <Link>Career</Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <h5 className='text-lg font-semibold text-white'>Support</h5>
                    <Link>Help Desk</Link>
                    <Link>Corporate Sales</Link>
                    <Link>Become a Partner</Link>
                    <Link>Developers</Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <h5 className='text-lg font-semibold text-white'>Contact</h5>
                    <Link>Chittagong - 4000, Bangladesh.</Link>
                    <Link>+88 011 - 222 - 555</Link>
                </div>
            </div>
            <div className='w-[85%] mx-auto'>
                <hr className='my-12 bg-light-dark pt-[1px] border-none' />
                <div className='flex flex-col md:flex-row justify-between items-center text-sm text-footer-white gap-4'>
                    <p> &copy; 2023 <span className='font-semibold'>Brainwave World</span>. All Rights Reserved</p>
                    <p>Made with <span className="text-[#E41B17]">&#x2764;</span> by <span className="font-semibold">S M Arifur Rahman</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;