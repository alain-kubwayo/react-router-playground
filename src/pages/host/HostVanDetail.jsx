import { useEffect, useState } from "react";
import { NavLink, useParams, Link, Outlet } from "react-router-dom";

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
    }, [id])

    const activeStyles = {
        color: "skyblue",
        fontWeight: 900
    }

    if(!van){
        return (
            <div>Loading...</div>
        )
    }
    
    return ( 
        <div>
            <Link
                to=".."
                relative="path"
                className="inline-flex my-4 font-semibold hover:underline"
            >&larr; Back to all vans</Link>
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
                <NavLink 
                    to="."
                    end
                    style={({isActive}) => isActive ? activeStyles : null}
                >Details</NavLink>
                <NavLink 
                    to="pricing"
                    style={({isActive}) => isActive ? activeStyles : null}
                >Pricing</NavLink>
                <NavLink 
                    to="photos"
                    style={({isActive}) => isActive ? activeStyles : null}
                >Photos</NavLink>
            </div>
            <Outlet context={{ van }} />
        </div>
    );
}
 
export default HostVanDetail;