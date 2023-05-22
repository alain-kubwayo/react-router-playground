import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="my-10">
            <h2 className="mb-5 text-base font-bold">Sorry, the page you were looking for was not found.</h2>
            <Link
                to="/"
                className="px-4 py-2 text-white bg-black"
            >Return to home</Link>
        </div>
     );
}
 
export default NotFound;