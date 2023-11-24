import Header from "./Header.jsx";
import Picture from "./Picture.jsx";
import Section from "./Section.jsx";
import Aside from "./Aside.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <div className={"bg-black min-h-screen flex items-center"}>
        <div className={"px-[15px] max-w-screen-sm bg-off-white lg:max-w-screen-lg lg:h-[1024px] lg:w-full mx-auto " + "font-Inter lg:px-[164px] lg:grid lg:grid-cols-[auto,auto,auto] lg:grid-rows-[auto,auto,auto,auto] lg:gap-x-[28px]"}>
          <Header />
          <Picture />
          <Section />
          <Aside />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
