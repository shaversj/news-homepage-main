import web3Desktop from '/src/assets/images/image-web-3-desktop.jpg'
import web3Mobile from '/src/assets/images/image-web-3-mobile.jpg'
import logo from '/src/assets/images/logo.svg'
import iconMenu from '/src/assets/images/icon-menu.svg'
import iconMenuClose from '/src/assets/images/icon-menu-close.svg'
import laptop from '/src/assets/images/image-top-laptops.jpg'
import retropc from '/src/assets/images/image-retro-pcs.jpg'
import gaming from '/src/assets/images/image-gaming-growth.jpg'
import {useState} from "react";
import { FaX } from "react-icons/fa6";

function App() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    console.log(isMobileMenuOpen)

  return (
    <>
        <div className={"bg-black min-h-screen flex items-center"}>
            <div className={"px-[15px] max-w-screen-sm bg-off-white lg:max-w-screen-lg lg:h-[1024px] lg:w-full mx-auto font-Inter lg:px-[164px] lg:grid lg:grid-cols-[auto,auto,auto] lg:grid-rows-[auto,auto,auto,auto] lg:gap-x-[28px]"}>

                <header className={"pt-5 flex items-center lg:pt-[89px] lg:row-start-1 lg:col-span-full sm:relative"}>
                    <img className={"sm:w-[48px] sm:h-[32px] lg:w-auto lg:h-auto"} src={logo} alt={""} />

                    <nav className={"ml-auto "}>
                        <button className={"lg:hidden"}>
                            <img className={""} src={iconMenu} alt={""} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}/>
                        </button>
                        <ul className={"hidden lg:flex lg:gap-x-[39px] text-dark-grayish-blue lg:font-light"}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">New</a></li>
                            <li><a href="#">Popular</a></li>
                            <li><a href="#">Trending</a></li>
                            <li><a href="#">Categories</a></li>
                        </ul>
                        {isMobileMenuOpen && (
                            <div className={"min-h-screen bg-off-white w-[250px] absolute left-[6.5rem] top-[0.00rem]"}>
                                <button className={"ml-auto flex justify-end pt-6 pr-2"} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}><FaX size={"2em"} />
                                </button>
                                <ul className={"space-y-4 text-dark-grayish-blue lg:font-light pl-5 pt-[86px]"}>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">New</a></li>
                                    <li><a href="#">Popular</a></li>
                                    <li><a href="#">Trending</a></li>
                                    <li><a href="#">Categories</a></li>
                                </ul>
                            </div>
                        )}
                    </nav>

                </header>

                {/*<img className={"lg:row-start-2 col-span-2 w-[730px] lg:pt-[55px]"} src={web3Desktop} alt="" />*/}
                <picture className={"lg:row-start-2 lg:col-span-2 lg:w-[730px] lg:pt-[55px]"}>
                    <source className={""} srcSet={web3Desktop} media="(min-width: 1440px)" />
                    <img className={"pt-7 lg:pt-0 "} src={web3Mobile} alt={""} />
                </picture>

                <div className={"pt-6 lg:row-start-3 lg:col-span-2 lg:flex lg:pt-[30px] lg:w-[730px]"}>
                    <div className={""}>
                        <h1 className={"text-[42px] leading-10 font-bold lg:font-extrabold lg:text-[56.5px] lg:leading-[3.5rem]"}>The Bright Future of Web 3.0?</h1>
                    </div>
                    <div className={"basis-[106%]"}>
                        <div className={"pt-4 lg:col-start-2 lg:pt-0"}>
                            <p className={"text-dark-grayish-blue text-[15px]"}>
                                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                                But is it really fulfilling its promise?
                            </p>
                            <button className={"bg-soft-red px-8 py-2 mt-4 lg:mt-[38px] lg:px-[34.5px] lg:py-[11.5px]"}>
                                <span className={"uppercase text-[15px] tracking-[.2rem] text-off-white"}>Read more</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={"px-[20px] lg:px-[24.5px] bg-very-dark-blue mt-14 lg:col-start-3 lg:row-start-2 lg:row-end-4  lg:mt-0 lg:mt-[55px]"}>
                    <h2 className={"pt-5 text-soft-orange text-[28px] font-semibold lg:text-[39.9px]"}>New</h2>
                    <div className={"divide-y-[.01px]   divide-dark-grayish-blue"}>
                        <div className={"pb-5 pt-5 space-y-2 lg:space-y-1.5 lg:pb-7 lg:pt-[20px]"}>
                            <h3 className={"text-white font-semibold text-[21px] lg:text-[20.25px] lg:font-bold"}>Hydrogen VS Electric Cars</h3>
                            <p className={"text-grayish-blue text-[16px] font-thin lg:text-[14.1px] lg:tracking-[0.04rem] lg:leading-[1.6rem] lg:pr-4"}>Will hydrogen-fueled cars ever catch up to EVs?</p>
                        </div>
                        <div className={"pb-5 pt-5 space-y-2 lg:space-y-1.5 lg:pb-[28px] lg:pt-7"}>
                            <h3 className={"text-white font-semibold text-[21px] lg:text-[20.25px] lg:font-bold"}>The Downsides of AI Artistry</h3>
                            <p className={"text-grayish-blue text-[16px] font-thin lg:text-[14.1px] lg:tracking-[0.04rem] lg:leading-[1.6rem] lg:pr-4"}>What are the possible adverse effects of on-demand AI image generation?</p>
                        </div>
                        <div className={"pb-5 pt-5 space-y-2 lg:space-y-1.5 lg:pb-7 lg:pt-7"}>
                            <h3 className={"text-white font-semibold text-[21px] lg:text-[20.25px] lg:font-bold"}>Is VC Funding Drying Up?</h3>
                            <p className={"text-grayish-blue text-[16px] font-thin lg:text-[14.1px] lg:tracking-[0.04rem] lg:leading-[1.6rem] lg:pr-4"}>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                        </div>
                    </div>

                </div>


                <footer className={"pt-14 space-y-8 pb-20 lg:row-start-4 lg:space-y-0 lg:col-span-full lg:flex lg:gap-x-[24px] lg:pb-[128px] lg:pt-[71px]"}>
                    <div className={"flex gap-x-4 lg:gap-x-6 justify-center"}>

                        <img className={"w-[100px] lg:w-[100px] lg:h-[126px] "} src={retropc} alt={"Old desktop computer"} />
                        <div className={"space-y-3 lg:space-y-2 lg:w-[245px]"}>
                            <h2 className={"text-3xl font-semibold text-grayish-blue lg:text-[32px]"}>01</h2>
                            <h3 className={"font-bold text-xl lg:text-[18.5px]"}>Reviving Retro PCs</h3>
                            <p className={"text-dark-grayish-blue lg:text-[15.25px] lg:font-light"}>What happens when old PCs are given modern upgrades?</p>
                        </div>

                    </div>
                    <div className={"flex gap-x-4 lg:gap-x-6"}>
                        <img className={"w-[100px] lg:w-[100px] lg:h-[126px]"} src={laptop} alt={"Laptop Keys"} />
                        <div className={"space-y-3 lg:space-y-2 lg:w-[244px]"}>
                            <h2 className={"text-3xl font-semibold text-grayish-blue"}>02</h2>
                            <h3 className={"font-bold text-[18px] lg:text-[18.5px]"}>Top 10 Laptops of 2022</h3>
                            <p className={"text-dark-grayish-blue lg:text-[15.25px] lg:font-light"}>Our best picks for various needs and budgets.</p>
                        </div>

                    </div>
                    <div className={"flex gap-x-4 lg:gap-x-6"}>
                        <img className={"w-[100px] lg:w-[100px] lg:h-[126px]"} src={gaming} alt={"Gaming controller"} />
                        <div className={"space-y-3 lg:space-y-2 lg:w-[248px] items-cente"}>
                            <h2 className={"text-3xl font-semibold text-grayish-blue"}>03</h2>
                            <h3 className={"font-bold text-[18px] lg:text-[18.5px]"}>The Growth of Gaming</h3>
                            <p className={"text-dark-grayish-blue lg:text-[15.25px] lg:font-light"}>How the pandemic has sparked fresh opportunities.</p>
                        </div>
                    </div>

                </footer>
            </div>

        </div>
    </>
  )
}

export default App
