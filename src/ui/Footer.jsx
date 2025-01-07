const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        "Overview",
        "Features",
        "Solutions",
        "Tutorials",
        "Pricing",
        "Releases",
      ],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Newsletter",
        "Events",
        "Help centre",
        "Tutorials",
        "Support",
      ],
    },
    {
      title: "Use cases",
      links: [
        "Startups",
        "Enterprise",
        "Government",
        "SaaS centre",
        "Marketplaces",
        "Ecommerce",
      ],
    },
    {
      title: "Social",
      links: [
        "Twitter",
        "LinkedIn",
        "Facebook",
        "GitHub",
        "AngelList",
        "Dribbble",
      ],
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
    },
  ];

  return (
    <footer className="bg-white mb-10 text-center">
      {/* Footer Sections */}
      <div className="max-w-[1280px] py-10 px-4 sm:px-8 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12">
        {footerSections.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-500 transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 w-full my-6 sm:my-10" />

      {/* Footer Bottom Section */}
      <div className="max-w-[1216px] px-4 sm:px-8 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <img
            src="Group 160.png"
            alt="logo"
            className="w-[84.61px] h-[32px] object-contain"
          />
          <h2 className="text-headingFont font-semibold text-lg sm:text-xl">
            Untitled UI
          </h2>
        </div>
        <p className="text-footerText text-sm sm:text-base text-center sm:text-left">
          © 2077 zysktechnologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
