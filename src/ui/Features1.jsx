import { IoChatbubblesOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiChatSmile2Line } from "react-icons/ri";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import { BsChatHeart } from "react-icons/bs";
import { GiDividedSquare } from "react-icons/gi";

function Features1() {
  return (
    <div className="w-full px-6 pt-12 pb-12 flex flex-col gap-8 items-center justify-center mx-auto">
      <div className="flex flex-col justify-center items-center w-full max-w-4xl text-center">
        <h2 className="text-textPurple text-base font-semibold mb-3">
          Features
        </h2>
        <h4 className="text-headingFont text-2xl md:text-4xl font-semibold leading-8 md:leading-[44px] tracking-[-0.02em]">
          Analytics that feels like it’s from the future
        </h4>
        <p className="text-subText text-base md:text-xl mt-4">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl text-center">
        <section className="flex flex-col items-center px-4 py-6 bg-white ">
          <IoChatbubblesOutline className="mb-3 text-3xl text-gray-700" />
          <h4 className="text-headingFont text-lg font-semibold mb-2">
            Share team inboxes
          </h4>
          <p className="text-subText text-sm">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
        </section>

        <section className="flex flex-col items-center px-4 py-6 bg-white ">
          <AiOutlineThunderbolt className="mb-3 text-3xl text-gray-700" />
          <h4 className="text-headingFont text-lg font-semibold mb-2">
            Deliver instant answers
          </h4>
          <p className="text-subText text-sm">
            An all-in-one customer service platform that helps you balance
            everything your customers need to be happy.
          </p>
        </section>

        <section className="flex flex-col items-center px-4 py-6 bg-white ">
          <MdOutlineAutoAwesomeMotion className="mb-3 text-3xl text-gray-700" />
          <h4 className="text-headingFont text-lg font-semibold mb-2">
            Manage your team with reports
          </h4>
          <p className="text-subText text-sm">
            Measure what matters with Untitled’s easy-to-use reports. You can
            filter, export, and drilldown on the data in a couple clicks.
          </p>
        </section>

        <section className="flex flex-col items-center px-4 py-6 bg-white ">
          <RiChatSmile2Line className="mb-3 text-3xl text-gray-700" />
          <h4 className="text-headingFont text-lg font-semibold mb-2">
            Connect with customers
          </h4>
          <p className="text-subText text-sm">
            Solve a problem or close a sale in real-time with chat. If no one is
            available, customers are seamlessly routed to email without
            confusion.
          </p>
        </section>

        <section className="flex flex-col items-center px-4 py-6 bg-white ">
          <GiDividedSquare className="mb-3 text-3xl text-gray-700" />
          <h4 className="text-headingFont text-lg font-semibold mb-2">
            Connect the tools you already use
          </h4>
          <p className="text-subText text-sm">
            Explore 100+ integrations that make your day-to-day workflow more
            efficient and familiar. Plus, our extensive developer tools.
          </p>
        </section>

        <section className="flex flex-col items-center px-4 py-6 bg-white ">
          <BsChatHeart className="mb-3 text-3xl text-gray-700" />
          <h4 className="text-headingFont text-lg font-semibold mb-2">
            Our people make the difference
          </h4>
          <p className="text-subText text-sm">
            We’re an extension of your customer service team, and all of our
            resources are free. Chat to our friendly team 24/7 when you need
            help.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Features1;
