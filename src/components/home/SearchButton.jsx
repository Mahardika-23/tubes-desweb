const SearchBar = ({ value, onChange }) => {
    return (
        <>
        <div className="flex p-2 px-24 text-sm text-gray-900 border-none rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500">
        <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
            <input type="text" placeholder="" className="border-none max-h-full" value={value} onChange={onChange}/>
        </div>
        </>
    );
}

export default SearchBar;