import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiAlignJustify, FiX } from "react-icons/fi";
import Subscription from "../shared/subscription";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // sidebar
  const [isModalOpen, setIsModalOpen] = useState(false); // subscription modal
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // close sidebar on route change
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSubscribeModel = () => {
    setIsOpen(false);      // close sidebar
    setIsModalOpen(true);  // open subscription modal
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleNavigate = () => {
    window.location.href = "/";
  };

  return (
    <>
      <nav className="flex bg-[#232536] text-white font-poppins">
        <div className="max-w-[1280px] mx-auto flex py-[15px] px-4 lg:px-[50px] justify-between items-center w-full">
          {/* logo */}
          <div
            className="w-[60px] flex items-center rounded-full overflow-hidden hover:cursor-pointer"
            onClick={handleNavigate}
          >
            <img
              src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1755600067/Black_and_White_Automotive_Logo_wtyi4q.png"
              alt="logo"
            />
          </div>

          {/* desktop menu */}
          <div className="hidden md:flex gap-10 items-center">
            <ul className="flex gap-10 items-center text-[16px] font-semibold">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
             <button
                className="bg-[#ff5959] text-[#ffffff] py-3 px-10 font-bold rounded hover:bg-[#f0f0f0] hover:scale-105 transition-all duration-200"
                onClick={handleSubscribeModel}
              >
                Subscribe
              </button>
            <div>
              <Subscription open={isModalOpen} onClose={handleCloseModal} />
            </div>
          </div>

          {/* mobile menu toggle */}
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <FiX className="text-4xl" /> : <FiAlignJustify className="text-4xl" />}
            </button>
          </div>

          {/* overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-5 transition-opacity duration-300"
              onClick={toggleMenu}
            />
          )}

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full bg-[#232536] text-white z-10 w-[60vw] transform transition-transform ease-in-out duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="text-white transition-transform hover:scale-110 duration-200"
              >
                <FiX className="text-4xl" />
              </button>
            </div>

            <ul
              className={`flex flex-col items-center text-[16px] font-semibold gap-10 transition-all duration-500 ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isOpen ? "150ms" : "0ms" }}
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>

            <div
              className={`flex justify-center mt-8 transition-all duration-500 ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isOpen ? "250ms" : "0ms" }}
            >
              <button
                className="bg-[#ff5959] text-[#ffffff] py-3 px-10 font-bold rounded hover:bg-[#f0f0f0] hover:scale-105 transition-all duration-200"
                onClick={handleSubscribeModel}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Subscription Modal (global, works for both desktop & mobile) */}
      {isModalOpen && (
        <Subscription open={isModalOpen} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default Navbar;
