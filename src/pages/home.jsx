import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import SearchBar from "../components/home/SearchButton";
import Footer from "../components/Footer";
import { Card } from "../components/home/Card";

const Home = () => {

  const containerStyle = {
    background: 'url("../src/assets/pelayanan-img (1).jpg") center/cover no-repeat', // Replace with your image URL
  };

  const containerImages = {
    background: 'url("../src/assets/background-img-ril (1).jpg") center/cover no-repeat', // Replace with your image URL
};


  return (
    <div>
      <Navbar />
      <div className="h-96 flex flex-col justify-center items-center" style={containerImages}>
        <h1 className="font-bold text-white mb-2 text-4xl">mencari pengalaman liburan dari sini</h1>
        <div className="flex">
          <SearchBar />
        </div>
      </div>
      <div>
        <Card/>
      </div>
      <div className="flex flex-col justify-center h-screen brightness-50" style={containerStyle}>
          babi
      </div>
      <Footer />
    </div>
  );
};

export default Home;