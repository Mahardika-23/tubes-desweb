const SearchBar = ({ value, onChange }) => {
    return (
        <div>
            <input
        type="text"
        placeholder=""
        className="block p-2 px-24 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={value}
        onChange={onChange}
        
        />
        </div>
    );
}

export default SearchBar;