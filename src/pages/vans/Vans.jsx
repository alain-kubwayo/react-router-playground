
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const VansList = () => {
    const [vans, setVans] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const typeFilter = searchParams.get("type");
    
    const displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans;

    useEffect(()=>{
        const fetchVans = async () => {
            const response = await fetch('/api/vans');
            const data = await response.json();
            setVans(data.vans);
        }
        fetchVans();
    }, [])

    const handleFilterChange = (key, value) => {
        setSearchParams(prevParams => {
            if(value === null){
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        })
    }

    return ( 
        <div>
            <div className="py-10">
                <h3 className="my-10 text-lg font-semibold">Explore our van options</h3>
                <div className="flex justify-between">
                    <button onClick={() => handleFilterChange('type', 'simple')} className={`px-2 py-1 bg-orange-200 ${typeFilter === 'simple' ? 'bg-sky-900' : ''}`}>Simple</button>
                    <button onClick={() => handleFilterChange('type', 'luxury')} className={`px-2 py-1 bg-orange-200 ${typeFilter === 'luxury' ? 'bg-green-700' : ''}`}>Luxury</button>
                    <button onClick={() => handleFilterChange('type', 'rugged')} className={`px-2 py-1 bg-orange-200 ${typeFilter === 'rugged' ? 'bg-indigo-600' : ''}`}>Rugged</button>
                    { typeFilter && (
                        <button onClick={() => handleFilterChange('type', null)} to="." className="underline">Clear filters</button>
                        )
                    }
                </div>
            </div>
            <div>
                { displayedVans.length ? (
                    <div className="grid grid-cols-1 gap-20 sm:grid-cols-2">
                    { displayedVans.map(van => (
                        <Link to={`/vans/${van.id}`} key={van.id}>
                            <img src={van.imageUrl} alt={van.name} />
                            <div className="flex justify-between">
                                <h3>{van.name}</h3>
                                <div>
                                    <p>${van.price}</p>
                                    <p>/day</p>
                                </div>
                            </div>
                            <button className="px-2 py-1 bg-sky-400">{van.type}</button>
                        </Link>
                    )) }
                </div>
                ) : <div>Loading...</div>
            }
            </div>
        </div>
    );
}
 
export default VansList;