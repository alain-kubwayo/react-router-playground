import { NavLink } from "react-router-dom";

const HostNavbar = () => {
    const activeStyles = {
        color: 'skyblue',
        fontWeight: 900
    }
    return ( 
        <nav className="flex items-center justify-between my-10">
          <ul className="flex gap-x-4">
            <li>
                <NavLink 
                    to="."
                    end
                    style={({isActive}) => isActive ? activeStyles : null}
                >Dashboard</NavLink>
            </li>
            <li>
                <NavLink 
                    to="income"
                    style={({isActive}) => isActive ? activeStyles : null}
                >Income</NavLink>
            </li>
            <li>
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >Vans</NavLink>
            </li>
            <li>
                <NavLink 
                    to="reviews"
                    style={({isActive}) => isActive ? activeStyles : null}
                >Reviews</NavLink>
            </li>
          </ul>
        </nav>
    );
}
 
export default HostNavbar;