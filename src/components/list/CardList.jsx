import React, {useState, useEffect} from "react";
import SearchBar from "../home/SearchButton";
import { useNavigate } from "react-router-dom"

const CardList = () => {
    const dummyCardData = [
        {
            id: 1,
            src: "../src/assets/img-1.jpg",
            title: "Kediri, Indonesia",
            subtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
            location: "tengah hutan tropis",
            isi: "2 TAMU - 1 KAMAR TIDUR - 1 TEMPAT TIDUR - 1 KAMAR MANDI",
            stars: 1,
            price: "Rp2,681,319"
          },
          {
            "id": 2,
            "src": "../src/assets/img-2.jpg",
            "title": "Ubud, Indonesia",
            "subtitle": "Villa Modern dengan Kolam Renang Dekat Pantai",
            "location": "Dekat pusat seni Ubud",
            "isi": "4 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
            "stars": 1,
            "price": "Rp3,681,319"
          },
          {
            "id": 3,
            "src": "../src/assets/img-3.jpg",
            "title": "Seminyak, Indonesia",
            "subtitle": "Villa Mewah dengan Pemandangan Laut Indah",
            "location": "Dekat pantai Seminyak",
            "isi": "4 TAMU - 2 KAMAR TIDUR - 4 TEMPAT TIDUR - 2 KAMAR MANDI",
            "stars": 1,
            "price": "Rp5,681,319"
          },
          {
            "id": 4,
            "src": "../src/assets/img-4.jpg",
            "title": "Canggu, Indonesia",
            "subtitle": "Villa Besar dengan Fasilitas lengkap",
            "location": "Di tengah sawah Canggu",
            "isi": "8 TAMU - 4 KAMAR TIDUR - 4 TEMPAT TIDUR - 2 KAMAR MANDI",
            "stars": 1,
            "price": "Rp8,681,319"
          },
          {
            "id": 5,
            "src": "../src/assets/img-5.jpg",
            "title": "Jimbaran, Indonesia",
            "subtitle": "Villa dengan Kolam Renang Pribadi",
            "location": "Dekat pantai Jimbaran",
            "isi": "3 TAMU - 1 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
            "stars": 1,
            "price": "Rp1,681,319"
          },
          {
            "id": 6,
            "src": "../src/assets/img-7.jpg",
            "title": "Nusa Dua, Indonesia",
            "subtitle": "Villa Romantis dengan Keindahan Alam Nusa Dua",
            "location": "Dekat area pariwisata Nusa Dua",
            "isi": "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
            "stars": 1,
            "price": "Rp1,681,319"
          }, 
          {
            "id": 7,
            "src": "../src/assets/img-1.jpg",
            "title": "Nusa, Indonesia",
            "subtitle": "Villa Elegan dengan Pemandangan Pantai Indah",
            "location": "Dekat pantai Sanur",
            "isi": "6 TAMU - 3 KAMAR TIDUR - 3 TEMPAT TIDUR - 2 KAMAR MANDI",
            "stars": 1,
            "price": "Rp4,681,319"
          },
          {
            "id": 8,
            "src": "../src/assets/img-2.jpg",
            "title": "Tabanan, Indonesia",
            "subtitle": "Villa Tradisional di Pedesaan",
            "location": "Di tengah perbukitan Tabanan",
            "isi": "5 TAMU - 3 KAMAR TIDUR - 3 TEMPAT TIDUR - 2 KAMAR MANDI",
            "stars": 1,
            "price": "Rp4,381,319"
          },
          {
            "id": 9,
            "src": "../src/assets/img-3.jpg",
            "title": "Uluwatu, Indonesia",
            "subtitle": "Villa Mewah dengan Pemandangan Laut yang Menakjubkan",
            "location": "Dekat dengan pura Uluwatu",
            "isi": "6 TAMU - 3 KAMAR TIDUR - 3 TEMPAT TIDUR - 2 KAMAR MANDI",
            "stars": 1,
            "price": "Rp6,681,319"
          },
          {
            "id": 10,
            "src": "../src/assets/img-4.jpg",
            "title": "Denpasar, Indonesia",
            "subtitle": "Villa Keluarga dengan Taman yang Luas",
            "location": "Dekat pusat kota Denpasar",
            "isi": "8 TAMU - 4 KAMAR TIDUR - 4 TEMPAT TIDUR - 3 KAMAR MANDI",
            "stars": 1,
            "price": "Rp8,981,319"
          },
          {
            "id": 11,
            "src": "../src/assets/img-5.jpg",
            "title": "Lovina, Indonesia",
            "subtitle": "Villa Dekat Pantai dengan Kolam Renang Pribadi",
            "location": "Dekat pantai Lovina",
            "isi": "4 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 2 KAMAR MANDI",
            "stars": 1,
            "price": "Rp4,281,319"
          },
          {
            "id": 12,
            "src": "../src/assets/img-7.jpg",
            "title": "Singaraja, Indonesia",
            "subtitle": "Villa dengan Desain Klasik di Pegunungan",
            "location": "Di tengah pegunungan Singaraja",
            "isi": "6 TAMU - 3 KAMAR TIDUR - 3 TEMPAT TIDUR - 2 KAMAR MANDI",
            "stars": 1,
            "price": "Rp5,681,319"
          },
    ];

    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);

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

    useEffect(() => {
        if(search === ""){
            setItems(dummyCardData);
        } else{
            const filtered = dummyCardData.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
            console.log(search)
            console.log(filtered)
            setItems(filtered);
        }
    }, [search])
return (
        <>
        <div className="bg-[#232323]">
            <div>
        <SearchBar onChange={(e)=> setSearch(e.target.value)}/>
            </div>
        {/* <h1 className="font-bold text-center text-white text-3xl py-10">Rekomendasi Liburan Anda</h1> */}
        <div className=" grid sm:grid-cols-2 sm:gap-5 sm:mx-5 md:grid-cols-3 lg:grid-cols-4 lg:mx-10 lg:gap-10">
            {items.map((card) => (
            <div key={card.id} className="bg-gray-200 mt-5 rounded-lg" onClick={() => handleCardClick(card)}>
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
