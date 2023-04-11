import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-4xl font-extrabold uppercase">#VanLife</Link>
          <ul className="flex gap-x-4">
            <li>
                <Link to="/host">Host</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/vans">Vans</Link>
            </li>
          </ul>
        </nav>
    );
}
 
export default Navbar;