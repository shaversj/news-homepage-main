import retropc from "./assets/images/image-retro-pcs.jpg";
import laptop from "./assets/images/image-top-laptops.jpg";
import gaming from "./assets/images/image-gaming-growth.jpg";

const Footer = () => {
  return (
    <>
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
          <div className={"space-y-3 lg:space-y-2 lg:w-[248px]"}>
            <h2 className={"text-3xl font-semibold text-grayish-blue"}>03</h2>
            <h3 className={"font-bold text-[18px] lg:text-[18.5px]"}>The Growth of Gaming</h3>
            <p className={"text-dark-grayish-blue lg:text-[15.25px] lg:font-light"}>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
