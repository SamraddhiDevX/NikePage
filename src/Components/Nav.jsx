import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../Constants";

const Nav = () => {
    const [isHamburgerOpen, setIsHamburgerOpen]= useState(false);

    const clickHamburger = ()=>{
      setIsHamburgerOpen(!isHamburgerOpen);
    }

    
  return (
    <header className="py-8 w-full padding-x ">
        <nav className="flex justify-between 
                        items-center ">
         <ul  className=" flex justify-around items-center max-lg:hidden">
            
          <li key={navLinks[0].label} className="pr-10 font-montserrat leading-normal text-sm text-slate-gray">
            <a href={navLinks[0].href}>{navLinks[0].label}</a>
          </li>
          <li key={navLinks[1].label} className=" font-montserrat leading-normal text-sm text-slate-gray">
            <a href={navLinks[1].href}>{navLinks[1].label}</a>
          </li> 
          <li key={navLinks[2].label} className=" pl-10 font-montserrat leading-normal text-sm text-slate-gray">
            <a href={navLinks[2].href}>{navLinks[2].label}</a>
          </li> 
            </ul>
            <img  src={headerLogo}
            alt='logo'
            width={150}
            height={29} 
            className=""/>
            <ul className=" flex justify-around items-center max-lg:hidden">
           
           
          <li key={navLinks[3].label} className=" font-montserrat leading-normal text-sm text-slate-gray">
            <a href={navLinks[3].href}>{navLinks[3].label}</a>
          </li> 
          <li key={navLinks[4].label} className="pl-10 font-montserrat leading-normal text-sm text-slate-gray">
            <a href={navLinks[4].href}>{navLinks[4].label}</a>
          </li>     
            </ul>


            <div className='hidden max-lg:block'>
              <div className={`hover:cursor-pointer`}>
              <img src={hamburger} alt='hamburger icon' width={25} height={25} onClick={clickHamburger}  className=""/>
      
              </div>
           </div>
        {isHamburgerOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-65 flex items-center z-20 justify-center " onClick={clickHamburger}>
           
            <div className=" hover:cursor-pointer">
              <img src={hamburger} alt='hamburger icon' width={25} height={25} onClick={clickHamburger} />
      
              </div>

            <ul className="flex flex-col items-center">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="font-montserrat leading-normal font-medium text-[20px] text-white my-4 hover:text-coral-red pb-5"
                >
                  <a href={link.href} onClick={clickHamburger}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        </nav>
    </header>
  );
};

export default Nav;
