import CardDetail from "./CardDetail";

const Banner = () => {
    return (
    <>
    <div className="relative w-full h-screen">
        <div className="h-full absolute w-full">
            <img
            className="object-cover w-full h-90 brightness-50 "
            src="../src/assets/background-img-ril.jpg"
            alt="bg-images"
            />
            </div>
                <div className=" h-full flex flex-col justify-center px-24 drop-shadow-2xl">
                    <div className="text-white text-center -mt-200">
                        <h1 className="text-center pt-10 pb-20 font-bold text-4xl">Mencari Pengalaman Liburan dari Sini</h1>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <CardDetail/>
                    <CardDetail/>
                    </div>
                </div>
        </div>
    </>
    );
};

export default Banner;
