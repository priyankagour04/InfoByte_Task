import "./App.css";
import Aboutus from "./Components/About/Aboutus";
import BookBtnCard from "./Components/Cards/BookBtnCard.JSX";
import CountCard from "./Components/Cards/CountCard";
import ContactForm from "./Components/Contact/ContactForm";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";

import HomeScreen from "./Components/Home/HomeScreen";
import Map from "./Components/Map/Map";
import Navbar from "./Components/Navbar/Navbar";
import NavbarService from "./Components/Navbar/NavbarServices";
import Room from "./Components/Room/Room";
import Service from "./Components/Services/Service";

function App() {
  return (
    <>
   <NavbarService/>
      <HomeScreen />

      <Aboutus />
      <Room />
      <Service />
      <CountCard />
      <Gallery />
      <ContactForm/>
      <Map />
      <Footer />
    </>
  );
}

export default App;
