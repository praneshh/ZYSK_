function Trial() {
  return (
    <div className="w-full max-w-[1216px] h-auto sm:h-[374px]  bg-feedBackBg text-center mx-auto">
      <div className="p-[64px]">
        {" "}
        <h1 className="text-headingFont text-4xl font-semibold mb-6 ">
          Start your free trial
        </h1>
        <p className=" text-subText text-xl mb-20">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="w-[269px] h-[48px]  flex justify-between mx-auto">
          <button className="font-semibold text-subText border-1 border-subText bg-white px-[20px] py-[12px] rounded-md shadow-md ">
            Learn more
          </button>
          <button className="font-semibold text-white border-1 border-subText bg-buttonbg px-[20px] py-[12px] rounded-md shadow-md ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trial;
