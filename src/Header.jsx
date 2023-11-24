import logo from "./assets/images/logo.svg";
import iconMenu from "./assets/images/icon-menu.svg";
import { FaX } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <header className={"pt-5 flex items-center lg:pt-[89px] lg:row-start-1 lg:col-span-full sm:relative"}>
        <img className={"sm:w-[48px] sm:h-[32px] lg:w-auto lg:h-auto"} src={logo} alt={"W Logo"} />

        <nav className={"ml-auto "}>
          <button className={"lg:hidden"} type={"button"}>
            <img className={""} src={iconMenu} alt={""} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </button>
          <ul className={"hidden lg:flex lg:gap-x-[39px] text-dark-grayish-blue lg:font-light"}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
          {isMobileMenuOpen && (
            <div className={"min-h-screen bg-off-white w-[250px] absolute left-[6.5rem] top-[0.00rem]"}>
              <button type={"button"} className={"ml-auto flex justify-end pt-6 pr-2"} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <FaX size={"2em"} />
              </button>
              <ul className={"space-y-4 text-dark-grayish-blue lg:font-light pl-5 pt-[86px]"}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">New</a>
                </li>
                <li>
                  <a href="#">Popular</a>
                </li>
                <li>
                  <a href="#">Trending</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
