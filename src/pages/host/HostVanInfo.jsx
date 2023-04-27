import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
    const { van } = useOutletContext();

    return ( 
        <section className="my-4 space-y-2">
            <h4>
                <span className="font-bold">Name</span>: 
                {van.name}
            </h4>
            <h4>
                <span className="font-bold">Type</span>: 
                {van.type}
            </h4>
            <h4>
                <span className="font-bold">Description</span>: 
                {van.description}
            </h4>
            <h4>
                <span className="font-bold">Visibility</span>:
                public
            </h4>
        </section>
     );
}
 
export default HostVanInfo;