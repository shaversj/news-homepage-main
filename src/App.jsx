import web3Desktop from '/src/assets/images/image-web-3-desktop.jpg'
import web3Mobile from '/src/assets/images/image-web-3-mobile.jpg'
import logo from '/src/assets/images/logo.svg'
function App() {

  return (
    <>
        <div className={"bg-black min-h-screen flex items-center"}>
            <div className={"max-w-screen-sm bg-off-white lg:max-w-screen-lg lg:w-full mx-auto font-Inter lg:px-[163px]"}>

                <header className={"lg:flex lg:items-center"}>
                    <img src={logo} alt={""} />

                    <nav className={"lg:ml-auto"}>
                        <ul className={"lg:flex lg:gap-x-[36px] text-dark-grayish-blue"}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">New</a></li>
                            <li><a href="#">Popular</a></li>
                            <li><a href="#">Trending</a></li>
                            <li><a href="#">Categories</a></li>
                        </ul>
                    </nav>
                </header>

                <main>
                    {/*<picture>*/}
                    {/*    <source className={""} srcSet={web3Desktop} media="(min-width: 1440px)" />*/}
                    {/*    <img className={""} src={web3Mobile} alt="" />*/}
                    {/*</picture>*/}
                    <div>
                        <h1>The Bright Future of Web 3.0?</h1>
                        <div>
                            <p>
                                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                                But is it really fulfilling its promise?
                            </p>
                            <button>
                                <span>Read more</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2>New</h2>
                        <div>
                            <h3>Hydrogen VS Electric Cars</h3>
                            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                        </div>
                        <div>
                            <h3>The Downsides of AI Artistry</h3>
                            <p>What are the possible adverse effects of on-demand AI image generation?</p>
                        </div>
                        <div>
                            <h3>Is VC Funding Drying Up?</h3>
                            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                        </div>
                    </div>
                </main>

                <footer>
                    <div>
                        <h2>01</h2>
                        <h3>Reviving Retro PCs</h3>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                    <div>
                        <h2>02</h2>
                        <h3>Top 10 Laptops of 2022</h3>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                    <div>
                        <h2>03</h2>
                        <h3>The Growth of Gaming</h3>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>

                </footer>
            </div>

        </div>
    </>
  )
}

export default App
