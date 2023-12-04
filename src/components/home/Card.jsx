const Card = () => {
  const dummyCardData = [
    {
      id: 1,
      src: "../src/assets/img-2.jpg",
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
      src: "../src/assets/img-2.jpg",
      title: "Jakarta, Indonesia",
      location: "pantai kota",
      stars: 1,
      price: "Rp5,681,319",
    },
    {
      id: 4,
      src: "../src/assets/img-2.jpg",
      title: "Yogyakarta, Indonesia",
      location: "sejarah dan budaya",
      stars: 1,
      price: "Rp8,681,319",
    },
    {
      id: 5,
      src: "../src/assets/img-2.jpg",
      title: "Bandung, Indonesia",
      location: "pegunungan hijau",
      stars: 1,
      price: "Rp1,681,319",
    },
    {
      id: 6,
      src: "../src/assets/img-2.jpg",
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

    // const containerStyle = {
    //   background: 'url("https://example.com/your-background-image.jpg") center/cover no-repeat', // Replace with your image URL
    // };

    return (
      <>
      <div className="bg-[#232323]">
      <h1 className="font-bold text-center text-white text-3xl py-10">Rekomendasi Liburan Anda</h1>
        <div className=" grid grid-cols-3 gap-4 md:mx-10 lg:mx-96 mt-5">
          {dummyCardData.map((card) => (
            <div key={card.id} className="bg-gray-200 rounded-lg ">
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
  

  export default Card;
  // <div class="bg-white border border-gray-200 rounded-lg shadow">
  //     <a href="#">
  //         <img class=" rounded-t-lg" src="../src/assets/img-1.jpg" alt="product image" />
  //     </a>
  //     <div class="px-5 pb-5">
  //         <a href="#">
  //             <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Kediri, Indonesia</h5>
  //             <p>tengah hutan tropis</p>
  //         </a>
  //         <div class="flex items-center mt-2.5 mb-5">
  //             <div class="flex items-center space-x-1 rtl:space-x-reverse">
  //                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
  //                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  //                 </svg>
  //                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
  //                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  //                 </svg>
  //                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
  //                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  //                 </svg>
  //                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
  //                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  //                 </svg>
  //                 <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
  //                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  //                 </svg>
  //             </div>
  //             <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ">5.0</span>
  //         </div>
  //         <div class="flex items-center justify-between">
  //             <span class=" font-bold text-gray-900 dark:text-white">Rp1,681,319</span>
  //         </div>
  //     </div>
  // </div>