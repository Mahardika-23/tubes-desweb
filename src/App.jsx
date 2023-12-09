import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import List from "./pages/Vacation";

function App() {
return (
    <>
    <List/>
    <Home/>
    </>
)
}
export default App