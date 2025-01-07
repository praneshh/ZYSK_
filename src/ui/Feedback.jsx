function Feedback() {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1280px] mx-auto p-4 bg-feedBackBg mb-[96px]">
      <div className="flex gap-4 items-center mb-6">
        <img
          src="Logomark.png"
          alt="Company Logo"
          className="w-[24.17px] h-[40px] object-contain"
        />
        <p className="text-headingFont text-xl font-medium mt-2">Sisyphus</p>
      </div>

      <div className="text-headingFont font-medium text-2xl md:text-4xl lg:text-6xl text-center max-w-[1216px] mb-8 leading-[40px] md:leading-[50px] lg:leading-[60px] tracking-[-0.02em]">
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </div>

      <div className="flex flex-col items-center">
        <img
          src="Avatar.png"
          alt="Profile"
          className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[64px] lg:h-[64px] rounded-full object-cover mb-4"
        />
        <h4 className="text-base md:text-lg lg:text-xl font-semibold">
          Candice Wu
        </h4>
        <p className="text-sm md:text-base lg:text-lg text-gray-600">
          Product Manager, Sisyphus
        </p>
      </div>
    </div>
  );
}

export default Feedback;
