import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { CartContext } from "../context/CartContext";
import MenuHamburguesa from "./MenuHamburguesa";
import NavbarLinks from "./NavbarLinks";


export default function NavBar({loggedIn}) {

  const [nav, setNav] = useState(false);
  const { cart } = useContext(CartContext);
  const { sumaCantidadBadge } = cart;
  const [scroll, setScroll] = useState(false);



  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  console.log(loggedIn)
  return (
    <>
      <nav className={`
        flex flex-row w-full justify-between items-center px-4 md:p-4 lg:p-[43px] 
        fixed z-[20]  h-[72px] top-0 transition-colors duration-300 ease-out
        ${scroll ? 'bg-terciario duration-300' : ''}  
          `}>
        <Link to="./">
          <img
            src="https://i.ibb.co/q0P6HdF/logo-crv4-removebg-preview-3.png"
            alt="logo-crv4-removebg-preview-3"
            className="z-10"
          />
        </Link>
        <div className="hidden md:flex">
          <NavbarLinks flexDirection={'flex-row'} />
        </div>
        <div className='flex  items-center  text-blanco font-normal leading-5 text-[18px] z-10'>
          <Link className='text-3xl mr-20 pb-2' to={'/carrito'}>
            <Badge badgeContent={sumaCantidadBadge()} color="primary" >
              <ion-icon name="cart"></ion-icon>
            </Badge>
          </Link>
          <div className="hidden md:flex  items-center gap-x-1 text-xl">
            <ion-icon name="person-circle-outline"></ion-icon>
            <Link to={'/micuenta'} >
             {
              loggedIn ? "Bienvenido" : "Ingresar"
             } 
            </Link>
          </div>

          <MenuHamburguesa handleNav={handleNav} nav={nav} />
        </div>


        {/* Navbar responsive */}

      </nav>

      <div
        className={
          nav
            ? "md:hidden fixed  top-0 w-full h-screen transition-colors duration-300"
            : ""
        }
      >

        <div
          className={
            nav
              ? "fixed  top-0 w-screen h-[50%] shadow-md p-10 ease-in duration-300"
              : "fixed top-[-100%] w-full p-10 ease-out transition-all duration-300"
          }
        >
          <div className="py-4 flex flex-col items-center mt-10 ">
            <NavbarLinks flexDirection={'flex-col'} />

            <div className="md:hidden flex text-blanco items-center gap-x-1 mt-5 text-xl">
              <ion-icon name="person-circle-outline"></ion-icon>
              <Link to={'/micuenta'} >
                Ingresar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>


  );
}