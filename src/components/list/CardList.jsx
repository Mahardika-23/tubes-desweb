import React from "react";
import { useNavigate } from "react-router-dom"

const CardList = () => {
    const dummyCardData = [
    {
        id: 1,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp2,681,319"
    },
    {
        id: 2,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp2,681,319"
    },
    {
        id: 3,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp2,681,319"
    },
    {
        id: 4,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp2,681,319"
    },
    {
        id: 5,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp2,681,319"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp2,681,319"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp2,681,319"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp2,681,319"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp2,681,319"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp2,681,319"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp2,681,319"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp 100000"
    },
    {
        id: 6,
        src: "../src/assets/img-2.jpg",
        title: "Kediri, Indonesia",
        ubtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
        location: "tengah hutan tropis",
        isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
        stars: 1,
        price: "Rp 100000"
    },
    ];

    const navigate = useNavigate();
  
    const handleCardClick = (card) => {
      console.log("Clicked Card Data:", card); // Log the clicked card for debugging
      navigate(`/detail`, { state: { cardData: card } });
    };


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
        <div className=" grid sm:grid-cols-2 sm:gap-5 sm:mx-5 md:grid-cols-3 lg:grid-cols-4 lg:mx-10 lg:gap-10">
            {dummyCardData.map((card) => (
            <div key={card.id} className="bg-gray-200 mt-5 rounded-lg" onClick={() => handleCardClick(card)}>
                <img className="rounded-t-lg" src={card.src} alt={card.title} />
                <div className="px-4 py-4">
                <h2 className="text-2xl font-bold">{card.title}</h2>
                <h3>{card.location}</h3>
                <div className="flex items-center mt-2">
                {renderStars(card.stars)}
                </div>
                <h4 className="text-2xl font-semibold">{card.price}</h4>
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
