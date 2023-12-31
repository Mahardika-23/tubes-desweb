// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
    

    return (
        <nav className="justify-center py-5 bg-[#232323]">
        <div className="flex justify-between items-center bg-white rounded-full px-8 max-w-screen-xl  mx-auto">
            <img src="../src/assets/just.go-logo-1.png" className="h-20" alt="logo just-go" />
            <div className="flex space-x-4" id="navbar-links">
                <a href="#" className="text-gray-900 hover:text-gray-700">Booking</a>
                <a href="#" className="text-gray-900 hover:text-gray-700">Tentang</a>
                <a href="#" className="text-gray-900 hover:text-gray-700">Favorite</a>
                <a href="#" className="text-gray-900 hover:text-gray-700">Form</a>
            </div>
            <div className="">
                <button type="button" class="text-white bg-[#2F343C] hover:bg-gray-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">Register</button>
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