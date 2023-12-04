import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";

const Card = () => {
  const dummyCardData = [
    {
      id: 1,
      src: "../src/assets/img-2.jpg",
      title: "Kediri, Indonesia",
      subtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
      location: "tengah hutan tropis",
      isi: "2 TAMU - 1 KAMAR TIDUR - 1 TEMPAT TIDUR - 1 KAMAR MANDI",
      stars: 1,
      price: "Rp2,681,319"
    },
    {
      id: 2,
      src: "../src/assets/img-2.jpg",
      title: "Kediri, Indonesia",
      subtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
      location: "tengah hutan tropis",
      isi: "4 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
      stars: 1,
      price: "Rp3,681,319"
    },
    {
      id: 3,
      src: "../src/assets/img-2.jpg",
      title: "Kediri, Indonesia",
      subtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
      location: "tengah hutan tropis",
      isi: "4 TAMU - 2 KAMAR TIDUR - 4 TEMPAT TIDUR - 2 KAMAR MANDI",
      stars: 1,
      price: "Rp5,681,319"
    },
    {
      id: 4,
      src: "../src/assets/img-2.jpg",
      title: "Kediri, Indonesia",
      subtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
      location: "tengah hutan tropis",
      isi: "8 TAMU - 4 KAMAR TIDUR - 4 TEMPAT TIDUR - 2 KAMAR MANDI",
      stars: 1,
      price: "Rp8,681,319"
    },
    {
      id: 5,
      src: "../src/assets/img-2.jpg",
      title: "Kediri, Indonesia",
      subtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
      location: "tengah hutan tropis",
      isi: "3 TAMU - 1 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
      stars: 1,
      price: "Rp1,681,319"
    },
    {
      id: 6,
      src: "../src/assets/img-2.jpg",
      title: "Kediri, Indonesia",
      subtitle:"villa kecil Mezzanine Nyaman 4 menit dari Pantai",
      location: "tengah hutan tropis",
      isi: "2 TAMU - 2 KAMAR TIDUR - 2 TEMPAT TIDUR - 1 KAMAR MANDI",
      stars: 1,
      price: "Rp1,681,319"
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

    // const containerStyle = {
    //   background: 'url("https://example.com/your-background-image.jpg") center/cover no-repeat', // Replace with your image URL
    // };

    return (
      <>
      <div className="bg-[#232323]">
      <h1 className="font-bold text-center text-white text-3xl py-10">Rekomendasi Liburan Anda</h1>
        <div className=" grid grid-cols-3 gap-4 md:mx-10 lg:mx-96 mt-5">
          {dummyCardData.map((card) => (
            <div key={card.id} className="bg-gray-200 rounded-lg" onClick={() => handleCardClick(card)}>
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

  const Detailcard = () => {
    const location = useLocation();
    const cardData = location.state?.cardData;
  
    if (!cardData) {
      return <div>Error: Card data not available</div>;
    }
    

    return (
      <>
        <section className=" bg-black">
          
          <h1 className="text-left pt-10 pb-10 ml-5 font-bold text-4xl text-white">
          {cardData.subtitle}
          </h1>

          <div className="h-[80vh] bg-black flex">

            <div className="w-1/2 bg-white-500 p-4">
              <img className="bg-gray-300 h-full w-full rounded-md" src="https://o-cdn-cas.sirclocdn.com/parenting/images/Rumah_Pohon_Sederhana_-_4.width-800.format-webp.webp" alt="" />
            </div>
            

            <div className=" w-1/2 grid grid-cols-2 grid-rows-2 gap-4 p-4 ">

              <img className="bg-gray-300 h-full w-full rounded-md" src="https://o-cdn-cas.sirclocdn.com/parenting/images/Rumah_Pohon_Sederhana_-_4.width-800.format-webp.webp" alt="" />
              
              <img className="bg-gray-300 h-full w-full rounded-md" src="https://o-cdn-cas.sirclocdn.com/parenting/images/Rumah_Pohon_Sederhana_-_4.width-800.format-webp.webp" alt="" />
              
              <img className="bg-gray-300 h-full w-full rounded-md" src="https://o-cdn-cas.sirclocdn.com/parenting/images/Rumah_Pohon_Sederhana_-_4.width-800.format-webp.webp" alt="" />
              
              <img className="bg-gray-300 h-full w-full rounded-md" src="https://o-cdn-cas.sirclocdn.com/parenting/images/Rumah_Pohon_Sederhana_-_4.width-800.format-webp.webp" alt="" />
              
            </div>

          </div>
        </section>

        <section className="bg-black">

          <div className=" grid grid-cols-2 h-screen bg-black-100 flex">

            <div className="bg-black-500 p-4">

              <h1 className="text-xl font-bold text-white">{cardData.title} {cardData.location}</h1>
              <p className="text-base text-white">{cardData.isi}</p>

              <p className="border-b-2 mt-5 bg-black"></p>

              <p className="text-base mt-5 text-white "> Fitur </p>

              <p className="border-b-2 mt-5 bg-black"></p>

              <p className="text-base mt-5 text-white "> penjelasan </p>




              
            </div>
           

            <div className="flex bg-black justify-center">
    
              <div className="p-6 border rounded-md bg-white w-full h-3/4 md:w-2/3 h-3/4">
                
                <h2 className="text-2xl font-semibold mb-4">{cardData.price} PERMALAM</h2>
                
                <div className="grid grid-cols-4 grid-rows-2 h-40">

                  <div className="grid col-span-2 border-2 border-black rounded-tl-lg place-content-center">Check-in</div>
                  <div className="grid col-span-2 border-2 border-black rounded-tr-lg place-content-center">check-out</div>
                  <div className="grid col-span-4 border-2 border-black rounded-b-lg place-content-center">Tamu</div>
                  
                </div>
                
                <button className="bg-black text-white px-4 py-2 rounded-3xl mx-auto w-full mt-5">PESAN</button>
              </div>
            </div>


          
          </div>
        </section>
      </>
    );
  };
  
  export { Card , Detailcard  };