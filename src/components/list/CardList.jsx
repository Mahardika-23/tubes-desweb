import React from "react";

const CardList = () => {
    const dummyCardData = [
    {
        id: 1,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 2,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 3,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 4,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 5,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        location: "tengah hutan tropis",
        stars: 1,
        price: "Rp 100000"
    },
    ];


    const renderStars = (numStars) => {
        const yellowStarStyle = {
        color: "#FFD700", 
    };
    if (numStars > 0) {
        return (
            <div className="flex items-center">
                <span style={yellowStarStyle}>
                {"★".repeat(numStars)}
                </span>
                <span className="ml-1">{numStars}</span>
                <span className="ml-1">/ 5</span>
            </div>
            );
        }
        return "";
    };
return (
        <>
        <div className="bg-[#232323]">
        {/* <h1 className="font-bold text-center text-white text-3xl py-10">Rekomendasi Liburan Anda</h1> */}
        <div className=" grid md:grid-cols-4 md:mx-5 grid-cols-2 gap-20  ">
            {dummyCardData.map((card) => (
            <div key={card.id} className="bg-gray-200 p-3 rounded-lg mt-5">
                <img className="rounded-lg" src={card.src} alt={card.title} />
                <div className="mt-5">
                <h2>{card.title}</h2>
                <h3>{card.location}</h3>
                <div className="flex items-center mt-2">
                {renderStars(card.stars)}
                </div>
                    <button>halo</button>
                <h4 className="">
                    {card.price}
                    </h4>
                </div>
            </div>
            ))}
        </div>
            <h1 className="font-bold text-center text-white text-3xl pt-8  pb-2 ">Melanjutkan Penelusuran Tujuan Anda?</h1>
            <div className="flex justify-center mt-3">
            <button type="button" class="text-white bg-[#2F343C] hover:bg-emerald-600 hover:text-white  transition-colors duration-300 font-medium rounded-full text-sm px-5 py-3 me-2 mb-5 ">tampilkan lebih banyak</button>
            </div>
        </div>
        </>
    );
    };
    
    export default CardList;
