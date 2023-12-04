import React from "react";

const CardList = () => {
    const dummyCardData = [
        {
            id: 1,
            src: "../src/assets/img-1.jpg",
            title: "Kediri, Indonesia",
            location: "tengah hutan tropis",
            stars: 1,
            price: "Rp2,681,319",
          },
          {
            id: 2,
            src: "../src/assets/img-2.jpg",
            title: "Bali, Indonesia",
            location: "pantai eksotis",
            stars: 1,
            price: "Rp3,681,319",
          },
          {
            id: 3,
            src: "../src/assets/img-3.jpg",
            title: "Jakarta, Indonesia",
            location: "pantai kota",
            stars: 1,
            price: "Rp5,681,319",
          },
          {
            id: 4,
            src: "../src/assets/img-4.jpg",
            title: "Yogyakarta, Indonesia",
            location: "sejarah dan budaya",
            stars: 1,
            price: "Rp8,681,319",
          },
          {
            id: 5,
            src: "../src/assets/img-5.jpg",
            title: "Bandung, Indonesia",
            location: "pegunungan hijau",
            stars: 1,
            price: "Rp1,681,319",
          },
          {
            id: 6,
            src: "../src/assets/img-4.jpg",
            title: "Surabaya, Indonesia",
            location: "kota pesisir",
            stars: 1,
            price: "Rp1,681,319",
          },
          {
      id: 1,
      src: "../src/assets/img-1.jpg",
      title: "Kediri, Indonesia",
      location: "tengah hutan tropis",
      stars: 1,
      price: "Rp2,681,319",
    },
    {
      id: 2,
      src: "../src/assets/img-2.jpg",
      title: "Bali, Indonesia",
      location: "pantai eksotis",
      stars: 1,
      price: "Rp3,681,319",
    },
    {
      id: 3,
      src: "../src/assets/img-3.jpg",
      title: "Jakarta, Indonesia",
      location: "pantai kota",
      stars: 1,
      price: "Rp5,681,319",
    },
    {
      id: 4,
      src: "../src/assets/img-4.jpg",
      title: "Yogyakarta, Indonesia",
      location: "sejarah dan budaya",
      stars: 1,
      price: "Rp8,681,319",
    },
    {
      id: 5,
      src: "../src/assets/img-5.jpg",
      title: "Bandung, Indonesia",
      location: "pegunungan hijau",
      stars: 1,
      price: "Rp1,681,319",
    },
    {
      id: 6,
      src: "../src/assets/img-4.jpg",
      title: "Surabaya, Indonesia",
      location: "kota pesisir",
      stars: 1,
      price: "Rp1,681,319",
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
        <div className=" grid sm:grid-cols-2 sm:gap-5 sm:mx-5 md:grid-cols-3 lg:grid-cols-4 lg:mx-10 lg:gap-10">
            {dummyCardData.map((card) => (
            <div key={card.id} className="bg-gray-200 mt-5 rounded-lg">
                <img className="rounded-t-lg h-64 w-full" src={card.src} alt={card.title} />
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
