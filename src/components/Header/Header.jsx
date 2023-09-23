import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-between py-5 items-center">
            <h1 className="text-3xl font-bold ">CareerHub</h1>
            <ul className="flex gap-5 text-lg font-bold">
                <NavLink to={'/'}>Statistics</NavLink>
                <NavLink to={'/appli'}>Applied Jobs</NavLink>
                <NavLink to={'/'}>Blog</NavLink>
            </ul>
            <button className="px-4 py-2 font-bold capitalize">Star Applying</button>
        </div>
    );
};

export default Header;