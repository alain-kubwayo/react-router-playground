import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const VanDetail = () => {
    const { id } = useParams();
    const [van, setVan] = useState(null);

    useEffect(() => {
        const fetchVan = async () => {
            const response = await fetch(`/api/vans/${id}`);
            const data = await response.json();
            setVan(data.vans);
        }
        fetchVan();
    }, [id])
    
    return ( 
        <div>
            <Link to="/vans" className="text-lg font-semibold">{`<- All Vans`}</Link>
            {
                van ? (
                    <div>
                        <img src={van.imageUrl} alt={van.name} className="h-96 w-auto" />
                        <button className="my-4 bg-sky-900 text-white rounded-md px-2 py-1">{van.type}</button>
                        <h3 className="my-4 text-lg font-bold">{van.name}</h3>
                        <p className="my-4">{van.description}</p>
                        <p className="my-4"><span className="font-bold">${van.price}</span>/day</p>
                        <button className="bg-yellow-500 px-2 py-1 rounded-md mb-4">Rent this van</button>
                    </div>
                ) : (
                    <div>Loading...</div>
                )
            }
        </div>
    );
}
 
export default VanDetail;