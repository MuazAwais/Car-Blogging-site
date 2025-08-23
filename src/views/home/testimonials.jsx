import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Testimonials() {
  return (
    <div className=" bg-[#232536] font-poppins">
      <div className="max-w-[1280px] mx-auto my-5 py-5 flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-center justify-between gap-4">
        {/* Testimonial section */}
        <div className="max-w-[321px] flex flex-col justify-center mx-auto py-16 lg:mr-16 gap-y-4">
          <h3 className=" text-white uppercase text-[16px] tracking-[0.2em]">
            Testimonials
          </h3>
          <h4 className="text-white font-bold text-2xl">
            What people say about our blog
          </h4>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className="border-b-2 border-gray-600 font-bold w-2/3 md:w-0 md:border-l-2 md:h-[250px] md:border-gray-600"></div>
        {/* Comment section */}
        <div className="max-w-[321px] md:max-w-[600px] flex flex-col justify-center mx-auto lg:px-16 py-8 text-white gap-8">
          <p className="text-white font-bold text-[19px] md:text-[24px] leading-[32px] max-w-[432px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center  mt-auto  ">
            <div className="w-[60px] rounded-full">
              <img
                src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1752951749/Ellipse_81_cprmwb.svg"
                alt="Jonathan Vallem"
              />
            </div>
            <div className="flex flex-col text-white gap-2">
              <h4 className="text-xl font-bold">Jonathan Vallem</h4>
              <p>New York,</p>
              <p>USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
