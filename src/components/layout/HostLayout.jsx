import { Outlet } from "react-router-dom";
import HostNavbar from "../ui/HostNavbar";

const HostLayout = () => {
    return ( 
        <>
            <HostNavbar />
            <Outlet />
        </>
    );
}
 
export default HostLayout;