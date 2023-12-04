import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardList from "../components/list/CardList";
import SearchBar from "../components/home/SearchButton";

const Vacation = () => {
    const containerImages = {
        background: 'url("../src/assets/background-img-ril (1).jpg") center/cover no-repeat', // Replace with your image URL
    };
    return (
        <>
        <Navbar/>
        <div className="h-96 flex flex-col justify-center items-center" style={containerImages}> 
            {/* <h1 className="font-bold text-white mb-2 text-4xl">mencari pengalaman liburan dari sini</h1> */}
            <div className="flex">
            <SearchBar />
            </div>
            </div>
        <CardList/>
        <Footer/>
        </>
    )
}

export default Vacation