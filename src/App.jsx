import "./App.css";
import Aboutus from "./Components/About/Aboutus";
import BookBtnCard from "./Components/Cards/BookBtnCard.JSX";
import CountCard from "./Components/Cards/CountCard";
import RoomCards from "./Components/Cards/RoomCards";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";

import HomeScreen from "./Components/Home/HomeScreen";
import Room from "./Components/Room/Room";
import Service from "./Components/Services/Service";

function App() {
  return (
    <>
      <HomeScreen />
  
      <Aboutus />
     <Room/>
     <Service/>
     <CountCard/>
     <Gallery/>
     <Footer/>
     
    </>
  );
}

export default App;
