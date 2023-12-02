
const Card = () => {
    return (
    <div className="mx-2 mb-5">
        
    <div className="flex gap-5">

    
    <h1 className="text-center pt-8 pb-8 font-bold text-4xl">Mencari Pengalaman Liburan dari Sini</h1>
                    

  


        </div>
        <div>
          <h1 className="text-center pt-8 pb-8 font-bold text-4xl">
            Rekomendasi Liburan dari Sini
          </h1>
          <div className="bg-[#F9D86C] py-10"></div>
          </div>
        <div>
          <h1 className="text-center pt-8 pb-8 font-bold text-4xl	">
            Pelayanan dari Kami
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;