import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    

    return (
        <nav className="justify-center py-5 bg-[#2F343C]">
        <div className="flex justify-between items-center bg-white rounded-full px-8 max-w-screen-xl  mx-auto">
            <img src="../src/assets/just.go-logo-1.png" className="h-20" alt="logo just-go" />
            <div className="flex space-x-4" id="navbar-links">
                <a href="#" className="text-gray-900 hover:text-gray-700">Beranda</a>
                <a href="#" className="text-gray-900 hover:text-gray-700">Liburan</a>
                <a href="#" className="text-gray-900 hover:text-gray-700">Favorite</a>
                <a href="#" className="text-gray-900 hover:text-gray-700"></a>
            </div>
            <div className="">
          <Link to="/register" className="text-white bg-[#2F343C] hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
            Register
          </Link>
        </div>
        </div>
    </nav>
    
    );
};

export default Navbar;


{/* <a href="/home">
<img src="../src/assets/just.go-logo-1.png" className="h-20" alt="just-go Logo" />
</a>
<div className="items-center flex space-x-4">
<ul className="flex">
<li>
    <a href="" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
    Booking
    </a> 
</li>
<li>
    <a href="" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
    Tentang Kami
    </a> 
</li>
<li>
    <a href="" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
    Favorit
    </a> 
</li>
<li>
    <a href="" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
    Booking
    </a> 
</li>
</ul>
</div> */}