import Navbar from "../components/Navbar";
// import CardHome from "../components/CardHome";
import Footer from "../components/Footer";
import Card from "../components/Card";
// import Banner from "../components/Banner";
// import MessageCard from "../components/MessageCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Banner /> */}
      <div>
        <Card/>
      </div>
      <div className="-bottom-20"></div>
      <Footer />
    </div>
  );
};

export default Home;