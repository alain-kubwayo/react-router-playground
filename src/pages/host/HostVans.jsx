import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        const fetchHostVans = async () => {
            const response = await fetch('/api/host/vans');
            const data = await response.json();
            setVans(data.vans);
        }
        fetchHostVans();
    }, [])

    return ( 
        <div>
            <h1 className="my-4 text-xl font-bold">Your Listed Vans</h1>
            <div>
                {
                    vans.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4">
                        {
                            vans.map(van => (
                                <Link 
                                    to={`/host/vans/${van.id}`}
                                    key={van.id}
                                >
                                    <div>
                                        <img src={van.imageUrl} alt={van.name} />
                                        <div>
                                            <h3>{van.name}</h3>
                                            <p>{van.price}</p>
                                        </div>
                                    </div>

                                </Link>
                            ))
                        }
                    </div>) : <div>Loading...</div>
                }
            </div>
        </div>
    );
}
 
export default HostVans;