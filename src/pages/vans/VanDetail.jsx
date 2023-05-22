import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const VanDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const [van, setVan] = useState(null);

    useEffect(() => {
        const fetchVan = async () => {
            const response = await fetch(`/api/vans/${id}`);
            const data = await response.json();
            setVan(data.vans);
        }
        fetchVan();
    }, [id])

    const search = location.state?.search || "";
    const type = location.state?.type || "all";
    
    return ( 
        <div>
            <Link 
                to={`..${search}`} 
                relative="path"
                className="text-lg font-semibold"
            >&larr; Back to {type} Vans</Link>
            {
                van ? (
                    <div>
                        <img src={van.imageUrl} alt={van.name} className="w-auto h-96" />
                        <button className="px-2 py-1 my-4 text-white rounded-md bg-sky-900">{van.type}</button>
                        <h3 className="my-4 text-lg font-bold">{van.name}</h3>
                        <p className="my-4">{van.description}</p>
                        <p className="my-4"><span className="font-bold">${van.price}</span>/day</p>
                        <button className="px-2 py-1 mb-4 bg-yellow-500 rounded-md">Rent this van</button>
                    </div>
                ) : (
                    <div>Loading...</div>
                )
            }
        </div>
    );
}
 
export default VanDetail;