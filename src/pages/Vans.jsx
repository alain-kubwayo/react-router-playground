import '../services/server';
import { useEffect, useState } from 'react';

const VansList = () => {
    const [vans, setVans] = useState([]);

    useEffect(()=>{
        const fetchVans = async () => {
            const response = await fetch('/api/vans');
            const data = await response.json();
            setVans(data.vans);
        }
        fetchVans();
    }, [])

    return ( 
        <div>
            <div className="py-10">
                <h3 className="font-semibold my-10 text-lg">Explore our van options</h3>
                <ul className="flex justify-between">
                    <li className="px-2 py-1 bg-orange-200">Simple</li>
                    <li className="px-2 py-1 bg-orange-200">Luxury</li>
                    <li className="px-2 py-1 bg-orange-200">Rugged</li>
                    <li className="underline">Clear filters</li>
                </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
                {vans?.map(van => (
                    <div key={van.id}>
                        <img src={van.imageUrl} alt={van.name} />
                        <div className="flex justify-between">
                            <h3>{van.name}</h3>
                            <div>
                                <p>${van.price}</p>
                                <p>/day</p>
                            </div>
                        </div>
                        <button className="bg-sky-400 px-2 py-1">{van.type}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default VansList;