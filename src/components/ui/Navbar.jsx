import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="flex justify-between items-center">
          <Link to="/" className="uppercase font-extrabold text-4xl">#VanLife</Link>
          <ul className="flex gap-x-4">
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