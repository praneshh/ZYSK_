import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { BiMinusCircle } from "react-icons/bi";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time. Your access will remain active until the end of the billing period.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can add additional information like your company name, VAT ID, etc., to your invoices from the billing settings.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is done on a monthly or annual basis, depending on your subscription plan.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can update your account email from your profile settings.",
    },
  ];

  function toggleAccordion(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className="mt-[90px]">
      <h2 className="text-headingFont text-3xl leading-[44px] font-semibold tracking-[-0.02em] text-center mb-3">
        Frequently asked questions
      </h2>
      <p className="text-subText text-sm leading-[30px] font-normal text-center mb-5">
        Everything you need to know about the product and billing.
      </p>

      <div className="w-full max-w-[768px] h-auto mx-auto px-4 font-sans">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 mb-5">
            <div
              className={`flex justify-between items-center cursor-pointer  py-3  `}
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-xl">
                {activeIndex === index ? (
                  <BiMinusCircle />
                ) : (
                  <RiAddCircleLine />
                )}
              </span>
            </div>
            {activeIndex === index && (
              <div>
                <p className="text-base font-normal text-subText">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-[100px] flex flex-col justify-center items-center w-full max-w-[1216px] h-auto sm:h-[298px] mx-auto bg-feedBackBg">
        <img src="Avatar group.png" alt="images" className="mb-7" />
        <h3 className="text-headingFont text-xl font-semibold mb-2">
          Still have questions?
        </h3>
        <p className="text-lg text-subText mb-5">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className="bg-buttonbg text-white rounded-md py-[12px] px-[20px] font-semibold text-base">
          Get in touch
        </button>
      </div>
      <hr className="border-t border-gray-300 w-full sm:w-[1216px] my-10 mx-auto" />
    </div>
  );
};

export default FAQ;
