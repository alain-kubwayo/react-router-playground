import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
    const { van } = useOutletContext();

    return ( 
        <div className="w-96 h-96">
            <img 
                src={van?.imageUrl} 
                alt="van" 
                className="w-full h-full" 
            />
        </div>
     );
}
 
export default HostVanPhotos;