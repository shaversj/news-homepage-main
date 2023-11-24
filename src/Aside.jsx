const Aside = () => {
  return (
    <>
      <aside className={"px-[20px] lg:px-[24.5px] bg-very-dark-blue mt-14 lg:col-start-3 lg:row-start-2 lg:row-end-4 lg:mt-[55px]"}>
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
      </aside>
    </>
  );
};

export default Aside;
