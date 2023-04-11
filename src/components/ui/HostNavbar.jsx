import { Link } from "react-router-dom";

const HostNavbar = () => {
    return ( 
        <nav className="flex items-center justify-between my-10">
          <ul className="flex gap-x-4">
            <li>
                <Link to="/host">Dashboard</Link>
            </li>
            <li>
                <Link to="/host/income">Income</Link>
            </li>
            <li>
                <Link to="/host/reviews">Reviews</Link>
            </li>
          </ul>
        </nav>
    );
}
 
export default HostNavbar;