import Navbar from "./Navbar";

const NavbarService = () => {
  return (
    <>
      <Navbar
        contactText={"Contact Us +"}
        links={[
          { name: "Home" },
          { name: "About Us" },
          { name: "Services" },
          { name: "Rooms" },
          { name: "Gallary" },
          { name: "Contact" },
        ]}
      />
    </>
  );
};

export default NavbarService;
