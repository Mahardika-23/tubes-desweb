import { FaSearchLocation } from "react-icons/fa";
const SearchBar = ({ value, onChange }) => {
    return (
        <>
        <div className="flex p-2 text-sm text-gray-900 rounded-lg bg-gray-50">
        <FaSearchLocation className="text-4xl mr-3"/>
            <input className="border-none bg-transparent w-full"  type="text" placeholder="" 
            value={value} onChange={onChange}/>
        </div>
        </>
    );
}

export default SearchBar;