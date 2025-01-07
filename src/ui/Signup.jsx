import { FaArrowRightLong } from "react-icons/fa6";

function Signup() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-32 w-full px-4 lg:w-[1024px] lg:h-[312px] mx-auto gap-6">
        <a
          href="/"
          className="flex flex-col sm:flex-row items-center bg-primaryPurple p-1 rounded-full gap-5 w-full sm:w-[355px] sm:h-[34px] border border-secondryPurple"
        >
          {/* Button */}
          <button className="border border-secondryPurple rounded-full text-xs sm:text-sm font-medium text-textPurple hover:bg-purple-100 transition-all  sm:h-[25px]  sm:w-[90px] S h-[25px] w-[90px] p-[1px]">
            New feature
          </button>

          {/* Text and arrow */}
          <span className="text-xs sm:text-sm font-medium text-textPurple flex items-center gap-2 text-center sm:text-left">
            Check out the team dashboard
            <FaArrowRightLong className="text-arrow" />
          </span>
        </a>

        <h1 className="font-bold text-2xl lg:text-6xl text-center">
          Beautiful analytics to grow smarter
        </h1>
        <p className="font-medium text-base lg:text-xl leading-6 lg:leading-[30px] text-subText text-center px-4">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        <div className="flex flex-col lg:flex-row gap-3 ">
          <button className="rounded-lg text-subTextBold border border-borderGray p-2 h-[50px] lg:h-[60px] w-[343px] lg:w-[143px] text-base lg:text-lg leading-[28px] font-semibold flex justify-center items-center gap-2">
            Demo{" "}
            <span className="material-symbols-outlined text-2xl">
              play_circle
            </span>
          </button>
          <button className="rounded-lg bg-buttonbg text-white p-2 w-full lg:w-[143px] h-[50px] lg:h-[60px] text-base lg:text-lg leading-[28px] font-semibold">
            Sign up
          </button>
        </div>
      </div>

      <img
        src="image 1.png"
        alt="web-image display"
        className="w-full lg:w-[1216px] h-auto lg:h-[560px] mx-auto mt-12"
      />

      <div className="flex flex-col justify-center items-center w-full lg:w-[1280px] mx-auto p-4">
        <p className="mt-8 text-sm lg:text-base text-subText text-center mb-3">
          Join 4,000+ companies already growing
        </p>
        <div className="flex flex-wrap w-full lg:w-[1216px] mx-auto justify-center lg:justify-between gap-4">
          <img
            src="Fictional company logo (1).png"
            alt="logos"
            className="w-[100px] h-auto lg:w-[167px] lg:h-[48px]"
          />
          <img
            src="Fictional company logo (2).png"
            alt="logos"
            className="w-[100px] h-auto lg:w-[167px] lg:h-[48px]"
          />
          <img
            src="Fictional company logo (3).png"
            alt="logos"
            className="w-[100px] h-auto lg:w-[167px] lg:h-[48px]"
          />
          <img
            src="Fictional company logo (4).png"
            alt="logos"
            className="w-[100px] h-auto lg:w-[167px] lg:h-[48px]"
          />
          <img
            src="Fictional company logo (5).png"
            alt="logos"
            className="w-[100px] h-auto lg:w-[167px] lg:h-[48px]"
          />
          <img
            src="Fictional company logo (6).png"
            alt="logos"
            className="w-[100px] h-auto lg:w-[167px] lg:h-[48px]"
          />
        </div>
      </div>

      <hr className="border-t border-gray-300 w-full sm:w-[1216px] my-10 mx-auto" />
    </>
  );
}

export default Signup;
