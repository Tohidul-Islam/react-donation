import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Resources/Logo.png"
const Header = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donations'>Donation</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>
    return (
        <div >
            <div className="navbar bg-base-100 max-w-7xl mx-auto">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex-1">
                    <Link to={'/'}><img src={logo} alt="" className="w-40" /></Link>
                </div>
                <div className="flex-none hidden sm:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;