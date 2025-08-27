
function Testimonials() {
  return (
    <div className=" bg-[#232536] font-poppins">
      <div className="max-w-[1280px] mx-auto px-4 py-4 lg:px-16 flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-center justify-between gap-4">
        {/* Testimonial section */}
        <div className="w-full flex flex-col justify-center mx-auto lg:mr-16 gap-y-4">
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
        <hr  className="border border-gray-600 w-full lg:rotate-90 lg:w-[450px]"/>
        {/* Comment section */}
        <div className="w-full lg:max-w-[600px] flex flex-col justify-center text-white gap-8">
          <p className="text-white font-bold text-[19px] md:text-[24px] leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center  mt-auto  ">
            <div className="w-[70px]">
              <img
                src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1752951749/Ellipse_81_cprmwb.svg"
                alt="Jonathan Vallem"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col text-white text-[12px]">
              <h4 className="font-bold">Jonathan Vallem</h4>
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
