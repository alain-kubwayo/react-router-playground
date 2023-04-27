import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const HostVanDetail = () => {
    const [van, setVan] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchHostVan = async () => {
            const response = await fetch(`/api/host/vans/${id}`);
            const data = await response.json();
            setVan(data.vans);
        }
        fetchHostVan();
    }, [])
    
    return ( 
        <div>
            { van && (
            <div className="flex gap-x-10">
                <div className="w-1/3">
                    <img src={van.imageUrl} alt={van.nane} />
                </div>
                <div className="flex flex-col justify-center gap-y-4">
                    <button className="text-white bg-orange-400">{van.type}</button>
                    <h3 className="text-xl font-bold">{van.name}</h3>
                    <p><span className="font-bold">${van.price}</span>/day</p>
                </div>
            </div>
            )}
             <div className="flex gap-x-10">
                <NavLink to="">Details</NavLink>
                <NavLink to="">Pricing</NavLink>
                <NavLink to="">Photos</NavLink>
            </div>
        </div>
    );
}
 
export default HostVanDetail;