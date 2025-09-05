import { FiSend } from "react-icons/fi";

const Mokeup = () => {
  return (
    <div className="bg-[#31323C]">
      <div className="relative max-w-[1280px] pt-[47px] pb-[36px] flex mx-auto text-white font-poppins bg-no-repeat ">
        <div className="flex flex-col  bg-cover bg-center pl-3 md:pl-11">
          <h2 className="font-bold text-[44px] leading-[1.2]  sm:text-[50px] md:text-[58px] lg:text-[66px] xl:text-[70px]">
            Your Journey <br />
            Your Car <br />
            Your Way
          </h2>
          <p className="py-5 text-[14px] sm:text-[16px] leading-snug max-w-[400px]  sm:max-w-[550px]">
            Every car tells a story, and every journey is unique. Whether you’re a passionate driver, an auto enthusiast, or simply someone who loves the freedom of the open road, this is your space to explore. Our blog celebrates the bond between people and their cars — from road trips and car reviews to maintenance tips and the latest automotive trends.
          </p>
          <button className="bg-[#ff5959] w-max  text-[#f0f0f0] py-[12px] flex px-6 md:py-[18px] md:px-8 font-bold rounded hover:border-collapse hover:bg-[#f0f0f0] hover:text-black">
            Subscribe <FiSend />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1752951749/Rectangle_12_vx8paw.svg"
            alt="mokeup"
            className="hidden absolute left-[55%] top-[15%] z-0 lg:block lg:w-[180px] xl:w-[180px]"
          />
          <img
            src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1752951772/Rectangle_13_ydc716.svg"
            alt="mokeup"
            className="hidden absolute left-[62%] top-[47%] z-1 lg:block lg:w-[180px] xl:w-[180px]"
          />
          <img
            src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1752951760/Rectangle_15_ibshhq.svg"
            alt="mokeup"
            className="hidden absolute left-[78%] top-[23%] z-2 lg:block lg:w-[180px] xl:w-[180px]"
          />
          <img
            src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1752951750/Rectangle_14_tnspua.svg"
            alt="mokeup"
            className="hidden absolute left-[70%] top-[10%] z-5 lg:block lg:w-[180px] xl:w-[180px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Mokeup;
