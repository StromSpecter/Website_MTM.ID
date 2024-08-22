import { useState } from "react";
import mtmLogo from "../assets/MTMLogo.png";
import { Link } from "react-router-dom";
import { RiMenu5Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-50 flex justify-center w-full bg-white border-b">
      <div className="container sticky flex items-center justify-between w-full h-20 px-5 py-5 mx-auto md:px-0">
        <Link to="/">
          <div className="flex flex-row items-center gap-2">
            <div className="flex items-center w-20 h-20">
              <img
                src={mtmLogo}
                alt="mtmLogo"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="hidden text-sm font-bold md:flex">
              PT MEDIA TELEKOMUNUKASI MANDIRI
            </p>
          </div>
        </Link>
        <div className="items-center hidden gap-2 md:flex">
          <Link to="/" className="w-20 py-2">
            <p>Home</p>
          </Link>
          <Link to="/about" className="w-20 py-2">
            <p>About</p>
          </Link>
          <Link to="/career" className="w-20 py-2">
            <p>Careers</p>
          </Link>
          <Link to="http://10.0.5.12/" className="w-20 py-2">
            <p>CSIRT</p>
          </Link>
          <Link to="/contact" className="w-20 py-2">
            <p>Contact</p>
          </Link>
        </div>
        <div className="flex md:hidden">
          <div className="p-2 border border-black rounded-full" onClick={toggleMenu}>
            {isOpen ? <RiCloseFill /> : <RiMenu5Fill />}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed left-0 z-50 w-full bg-white top-20">
          <div className="flex flex-col items-center py-4">
            <Link to="/" className="w-full py-2 text-center">
              <p>Home</p>
            </Link>
            <Link to="/about" className="w-full py-2 text-center">
              <p>About</p>
            </Link>
            <Link to="/career" className="w-full py-2 text-center">
              <p>Careers</p>
            </Link>
            <Link to="http://10.0.5.12/" className="w-full py-2 text-center">
              <p>CSIRT</p>
            </Link>
            <Link to="/contact" className="w-full py-2 text-center">
              <p>Contact</p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
