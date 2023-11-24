const Section = () => {
  return (
    <>
      <section className={"pt-6 lg:row-start-3 lg:col-span-2 lg:flex lg:pt-[30px] lg:w-[730px]"}>
        <div className={""}>
          <h1 className={"text-[42px] leading-10 font-bold lg:font-extrabold lg:text-[56.5px] lg:leading-[3.5rem]"}>The Bright Future of Web 3.0?</h1>
        </div>
        <div className={"basis-[106%]"}>
          <div className={"pt-4 lg:col-start-2 lg:pt-0"}>
            <p className={"text-dark-grayish-blue text-[15px]"}>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button className={"bg-soft-red px-8 py-2 mt-4 lg:mt-[38px] lg:px-[34.5px] lg:py-[11.5px]"}>
              <span className={"uppercase text-[15px] tracking-[.2rem] text-off-white"}>Read more</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
