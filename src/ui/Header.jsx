import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  function scrollTop(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <header className="fixed top-0 left-0 w-screen flex items-center justify-between px-4 lg:px-6 py-4 shadow-md bg-white z-50">
      <div className="flex items-center gap-6">
        <img
          src="Group 160.png"
          alt="logo"
          className="text-lg font-bold cursor-pointer"
          onClick={scrollTop}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500"
            onClick={scrollTop}
          >
            Home
          </a>
          <div className="relative">
            <button
              className="text-gray-800 hover:text-blue-500 flex items-center gap-1"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              Products <MdKeyboardArrowDown />
            </button>
            {isProductsOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Product 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Product 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Product 3
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="text-gray-800 hover:text-blue-500 flex items-center gap-1"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              Resources <MdKeyboardArrowDown />
            </button>
            {isResourcesOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Resource 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Resource 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Resource 3
                </a>
              </div>
            )}
          </div>

          <a href="#" className="text-gray-800 hover:text-blue-500">
            Pricing
          </a>
        </nav>
      </div>

      {/* Profile Picture (Desktop) */}
      <div className="hidden md:block w-10 h-10 mr-3 rounded-full overflow-hidden cursor-pointer">
        <img
          src="Avatar (1).png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-[343px] bg-white border-r  shadow-md z-50 md:hidden">
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={scrollTop}
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Products
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Resources
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Pricing
          </a>
          <div className="p-4">
            <img
              src="Avatar (1).png"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
