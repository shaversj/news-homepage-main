import web3Desktop from '/src/assets/images/image-web-3-desktop.jpg'
import web3Mobile from '/src/assets/images/image-web-3-mobile.jpg'
import logo from '/src/assets/images/logo.svg'
import iconMenu from '/src/assets/images/icon-menu.svg'
import iconMenuClose from '/src/assets/images/icon-menu-close.svg'
import laptop from '/src/assets/images/image-top-laptops.jpg'
import retropc from '/src/assets/images/image-retro-pcs.jpg'
import gaming from '/src/assets/images/image-gaming-growth.jpg'
function App() {

  return (
    <>
        <div className={"bg-black min-h-screen flex items-center"}>
            <div className={"px-[15px] max-w-screen-sm bg-off-white lg:max-w-screen-lg lg:max-h-[1024px] lg:w-full mx-auto font-Inter lg:px-[163px]"}>

                <header className={"pt-5 flex items-center lg:pt-[89px]"}>
                    <img className={"sm:w-[48px] h-[32px]"} src={logo} alt={""} />

                    <nav className={"ml-auto "}>
                        <button className={"lg:hidden"}>
                            <img className={""} src={iconMenu} alt />
                        </button>
                        <ul className={"hidden lg:flex lg:gap-x-[36px] text-dark-grayish-blue"}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">New</a></li>
                            <li><a href="#">Popular</a></li>
                            <li><a href="#">Trending</a></li>
                            <li><a href="#">Categories</a></li>
                        </ul>
                    </nav>
                </header>

                <main className={"lg:grid lg:grid-cols-[auto,auto] lg:grid-rows-[auto,auto]"}>
                    <picture className={"lg:col-start-1 lg:col-end-3"}>
                        <source className={""} srcSet={web3Desktop} media="(min-width: 1440px)" />
                        <img className={"pt-7 lg:pt-0"} src={web3Mobile} alt="" />
                    </picture>
                    <div className={"pt-6 lg:row-start-2"}>
                        <h1 className={"text-[42px] leading-10 font-bold"}>The Bright Future of Web 3.0?</h1>
                    </div>
                    <div className={"lg:row-start-2"}>
                        <div className={"pt-4 lg:col-start-2"}>
                            <p className={"text-dark-grayish-blue text-[15px]"}>
                                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                                But is it really fulfilling its promise?
                            </p>
                            <button className={"bg-soft-red px-8 py-2 mt-4"}>
                                <span className={"uppercase text-[15px] tracking-[.2rem] text-off-white"}>Read more</span>
                            </button>
                        </div>
                    </div>

                    <div className={"px-[20px] bg-very-dark-blue mt-14 lg:col-start-3 lg:row-span-2 lg:mt-0"}>
                        <h2 className={"pt-5 text-soft-orange text-[28px] font-semibold"}>New</h2>
                        <div className={"divide-y-[.01px] [&>div]:pt-5 divide-dark-grayish-blue"}>
                            <div className={"pb-5 space-y-2"}>
                                <h3 className={"text-white font-semibold text-[21px]"}>Hydrogen VS Electric Cars</h3>
                                <p className={"text-grayish-blue text-[16px] font-thin"}>Will hydrogen-fueled cars ever catch up to EVs?</p>
                            </div>
                            <div className={"pb-5 space-y-2"}>
                                <h3 className={"text-white font-semibold text-[21px]"}>The Downsides of AI Artistry</h3>
                                <p className={"text-grayish-blue text-[16px] font-thin"}>What are the possible adverse effects of on-demand AI image generation?</p>
                            </div>
                            <div className={"pb-5 space-y-2"}>
                                <h3 className={"text-white font-semibold text-[21px]"}>Is VC Funding Drying Up?</h3>
                                <p className={"text-grayish-blue text-[16px] font-thin"}>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                            </div>
                        </div>

                    </div>
                </main>

                <footer className={"pt-14 space-y-8 pb-20 lg:flex"}>
                    <div className={"flex gap-x-4"}>
                        <img className={"w-[100px] aspect-[3/4] "} src={retropc} alt={""} />
                        <div className={"space-y-3"}>
                            <h2 className={"text-3xl font-semibold text-grayish-blue"}>01</h2>
                            <h3 className={"font-bold text-xl"}>Reviving Retro PCs</h3>
                            <p className={"text-dark-grayish-blue"}>What happens when old PCs are given modern upgrades?</p>
                        </div>

                    </div>
                    <div className={"flex gap-x-4"}>
                        <img className={"w-[100px] aspect-[3/4]"} src={laptop} alt={""} />
                        <div className={"space-y-3"}>
                            <h2 className={"text-3xl font-semibold text-grayish-blue"}>02</h2>
                            <h3 className={"font-bold text-[18px]"}>Top 10 Laptops of 2022</h3>
                            <p className={"text-dark-grayish-blue"}>Our best picks for various needs and budgets.</p>
                        </div>

                    </div>
                    <div className={"flex gap-x-4"}>

                        <img className={"w-[100px] aspect-[3/4]"} src={gaming} alt={""} />
                        <div className={"space-y-3"}>
                            <h2 className={"text-3xl font-semibold text-grayish-blue"}>03</h2>
                            <h3 className={"font-bold text-[18px]"}>The Growth of Gaming</h3>
                            <p className={"text-dark-grayish-blue text-[15px]"}>How the pandemic has sparked fresh opportunities.</p>
                        </div>

                    </div>

                </footer>
            </div>

        </div>
    </>
  )
}

export default App
