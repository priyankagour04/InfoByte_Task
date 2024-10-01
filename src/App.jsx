import "./App.css";
import Aboutus from "./Components/About/Aboutus";
import CountCard from "./Components/Cards/CountCard";
import ContactForm from "./Components/Contact/ContactForm";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import HomeScreen from "./Components/Home/HomeScreen";
import Map from "./Components/Map/Map";
import NavbarService from "./Components/Navbar/NavbarServices";
import Room from "./Components/Room/Room";
import Service from "./Components/Services/Service";
import { Element } from "react-scroll";

function App() {
  // Define the sections to pass to Navbar
  const links = [
    { name: "HomeScreen" },
    { name: "About Us" },
    { name: "Rooms" },
    { name: "Services" },
    { name: "Card" },
    { name: "Gallary" },
    { name: "Contact" },
  ];

  return (
    <>
      {/* Pass the links and contactText to Navbar */}
      <NavbarService links={links} contactText="Contact" />
      <Element name="HomeScreen">
        <HomeScreen />
      </Element>
      <Element name="About Us">
        <Aboutus />
      </Element>
      <Element name="Rooms">
        <Room />
      </Element>
      <Element name="Services">
        <Service />
      </Element>
      <Element name="Card">
        <CountCard />
      </Element>
      <Element name="Gallary">
        <Gallery />
      </Element>
      <Element name="Contact">
        <ContactForm />
      </Element>
      <Element name="Map">
        <Map/>
      </Element>
      <Footer />
    </>
  );
}

export default App;
