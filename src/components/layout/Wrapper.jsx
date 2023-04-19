const Wrapper = ({ children }) => {
    return ( 
        <div className="w-11/12 px-5 sm:px-0 max-w-5xl mx-auto">
            { children }
        </div>
    );
}
 
export default Wrapper;