
function App() {

  return (
    <>
        <div className={"bg-black min-h-screen flex items-center"}>
            <div className={"max-w-screen-sm bg-off-white lg:max-w-screen-lg lg:w-full mx-auto"}>

                <header>

                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">New</a></li>
                            <li><a href="#">Popular</a></li>
                            <li><a href="#">Trending</a></li>
                            <li><a href="#">Categories</a></li>
                        </ul>
                    </nav>
                </header>

                <main>
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
