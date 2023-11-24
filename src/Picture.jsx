import web3Desktop from "./assets/images/image-web-3-desktop.jpg";
import web3Mobile from "./assets/images/image-web-3-mobile.jpg";

const Picture = () => {
  return (
    <>
      <picture className={"lg:row-start-2 lg:col-span-2 lg:w-[730px] lg:pt-[55px]"}>
        <source className={""} srcSet={web3Desktop} media="(min-width: 1440px)" />
        <img className={"pt-7 lg:pt-0 "} src={web3Mobile} alt={""} />
      </picture>
    </>
  );
};

export default Picture;
