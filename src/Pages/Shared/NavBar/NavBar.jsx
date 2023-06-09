import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import ActiveRoute from "../ActiveRoute/ActiveRoute";
import { Link } from "react-router-dom";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const navItems = <>
        <li><ActiveRoute to="/">Home</ActiveRoute></li>
        <li><ActiveRoute to="/toys">All Toys</ActiveRoute></li>
        <li><ActiveRoute to="/myToys">My Toys</ActiveRoute></li>
        <li><ActiveRoute to="/addToy">Add A Toy</ActiveRoute></li>
        <li><ActiveRoute to="/blogs">Blogs</ActiveRoute></li>
        {
            user ? "" :
                <li><ActiveRoute to="/signup">Sign Up</ActiveRoute></li>
        }
    </>

    return (
        <div className="navbar w-[85%] mx-auto py-5 flex items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white-secondary rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl sm:text-[21px] hover:text-primary-color">Brainwave World</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex items-center gap-3'>
                            <div style={{ "--tooltip-color": "#4acdd5", "--tooltip-text-color": "#FFFFFF" }} className='tooltip tooltip-left' data-tip={user.displayName}>
                                <img className='w-[45px] h-[45px] rounded-full object-cover align-top hover:tooltip' src={user.photoURL} alt="user photo" />
                            </div>
                            <button onClick={logOut} className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color px-6">Logout</button>
                        </div> :

                        <Link to="/login" className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color px-6">Login</Link>
                }
            </div>
        </div >
    );
};

export default NavBar;