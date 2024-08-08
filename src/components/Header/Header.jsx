import React from "react";
import Container from "../container/Container";
import { Link } from "react-router-dom";
// import DogLogo from '../../assets/DogLogo.png'

export default function Header() {

  const menuItems = [
    {
      name: "Home",
      href: "#",
      active : true
    },
    {
      name: "About",
      href: "#",
      active: true
    },
    {
      name: "Contact",
      href: "#",
      active: true
    },
  ];

  return (
  <>
    <header className="py-3 h-[70px] w-full shadow bg-yellow-400 mb-10">
    <Container>
      <nav className="flex gap-40">
          <div className="mr-4">
              <Link to='/'>
                {/* <img src="https://png.pngtree.com/png-vector/20191201/ourmid/pngtree-dog-logo-vector-design-png-image_2066898.jpg" width="80px" height="50px" alt="" /> */}
              </Link>
          </div>

          <ul className="flex">
              {menuItems.map((item) => (
                  item.active ? 
                  (<li key={item.name}>
                      <button
                          className="inline-block px-6 py-2 duration-200 hover:bg-yellow-500 text-white font-semibold text-xl rounded-full"
                      >
                          {item.name}
                      </button>
                  </li>) : null
              ))}
          </ul>

          <div>
            <Link to="signIn">
              <button className="py-2 px-6 text-white font-semibold text-xl rounded-full  hover:bg-yellow-500">Sign In</button>
            </Link>

            <Link to="signUp">
              <button className="py-2 px-6 text-white font-semibold text-xl rounded-full  hover:bg-yellow-500">Sign Up</button>
            </Link>
            
          </div>

          
      </nav>
  </Container>
</header>
  </>
  
)}