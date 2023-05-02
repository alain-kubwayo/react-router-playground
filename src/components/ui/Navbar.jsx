import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-4xl font-extrabold uppercase">#VanLife</Link>
          <ul className="flex gap-x-4">
            <li>
                <NavLink 
                    to="/host"
                    className={({ isActive }) => isActive ? 'text-sky-600 font-bold' : null}
                >Host</NavLink>
            </li>
            <li>
                <NavLink 
                    to="/about"
                    className={({ isActive }) => isActive ? 'text-sky-600 font-bold' : null}
                >About</NavLink>
            </li>
            <li>
                <NavLink 
                    to="/vans"
                    className={({ isActive }) => isActive ? 'text-sky-600 font-bold' : null}
                >Vans</NavLink>
            </li>
          </ul>
        </nav>
    );
}
 
export default Navbar;