import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  const handleNavigate = () => {
    window.location.href = "/";
  };
  return (
    <div className="bg-[#232536] text-white font-poppins">
      <div className="max-w-[1280px] mx-auto py-[15px] lg:px-[50px] justify-between items-center px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-x-4 items-center">
            <div
              className="w-[60px] flex items-center rounded-full overflow-hidden hover:cursor-pointer"
              onClick={handleNavigate}
            >
              <img
                src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1755600067/Black_and_White_Automotive_Logo_wtyi4q.png"
                alt="logo"
              />
            </div>
          </div>
          <div className="hidden md:flex gap-10 items-center ">
            <ul className="flex gap-10 items-center text-[16px] font-semibold ">
              <li className="hover:font-bold hover:underline">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:font-bold hover:underline">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="hover:font-bold hover:underline">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:font-bold hover:underline">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="hover:font-bold hover:underline">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-wrap mx-3 justify-between items-center  sm:gap-6 md:flex lg:flex-nowrap sm:mx-12 p-10 bg-[#ffffff1e] rounded ">
          <p className="text-[18px] font-bold leading-5  md:leading-8 sm:text-[23px]  md:text-[24px] lg:text-[27px] flex">
            Subscribe to our news letter to get latest updates and news
          </p>
          <div className="flex gap-4 w-full flex-col sm:flex-row mt-5 sm:mt-5 md:mt-0">
            <input
              name="email"
              id="email"
              type="email"
              placeholder="example@email.com"
              className="sm:max-w-[380px] w-full bg-white text-[#232536] py-[10px] px-2 rounded flex"
            />
            <button className="bg-[#ff5959] text-[#f0f0f0] py-[10px] flex px-8 font-bold rounded-xl hover:border-collapse hover:bg-[#f0f0f0] hover:text-black justify-center items-center">
              Subscribe <FiSend />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 my-5 mx-3 md:mx-12 sm:flex-row ">
          <div className="text-[16px] font-semibold">
            <p>Finstreet 118 2561 abctown</p>
            <p>example@femail.com 001 21345 442</p>
          </div>
          <div className="flex gap-6 text-[20px] mt-auto">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
