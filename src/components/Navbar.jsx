

const Navbar = () => {
return (
    <nav className="justify-center py-5 bg-[#2F343C]">
        <div className="flex justify-between items-center bg-white rounded-full px-8
        max-w-screen-xl mx-auto">
            <img src="../src/assets/just.go-logo-1.png" className="h-20" alt="logo just-go" />
            <div className="flex space-x-4" id="navbar-links">
                <a href="#" className="text-gray-900 hover:text-gray-700">Booking</a>
                <a href="#" className="text-gray-900 hover:text-gray-700">Tentang</a>
                <a href="#" className="text-gray-900 hover:text-gray-700">Favorite</a>
                <a href="#" className="text-gray-900 hover:text-gray-700">Form</a>
            </div>
            <div className="">
               
            </div>
        </div>
    </nav>
);
};
export default Navbar;
