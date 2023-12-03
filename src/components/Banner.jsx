import CardDetail from "./CardDetail";
import Navbar from "./Navbar";

const Banner = () => {
    return (
        <>
            <div className="relative w-full h-screen">
                <div className="h-full absolute w-full inset-0 overflow-hidden">
                    <img
                        className="object-cover w-full brightness-50"
                        src="../src/assets/background-img-ril (1).jpg"
                        alt="bg-images"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-center font-bold text-4xl text-white ">Mencari Pengalaman Liburan dari Sini</h1>
                        <CardDetail/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
