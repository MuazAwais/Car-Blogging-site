import { FiSend } from 'react-icons/fi'

const Mokeup = () => {
  return (
    <div className='bg-cover bg-center bg-no-repeat'style={{ backgroundImage: `url(https://res.cloudinary.com/dv8dtipj1/image/upload/v1752998482/Group_9107_1_c3l1ty.svg)` }}>
    <div className=" max-w-[1280px] pt-[40px] pb-[36px] flex mx-auto text-white font-poppins" >
      <div className="flex flex-col  bg-cover bg-center pl-4 lg:pl-11 gap-8">
        <h2 className='font-bold text-[44px] leading-[1.2]  sm:text-[50px] md:text-[58px] lg:text-[66px] xl:text-[70px]'>Your Journey <br />Your Car <br />Your Way</h2>
        <p className=' text-[14px] sm:text-[16px] leading-snug max-w-[400px]  sm:max-w-[650px]'>Every car tells a story, and every journey is unique. Whether you’re a passionate driver, an auto enthusiast, or simply someone who loves the freedom of the open road, this is your space to explore. Our blog celebrates the bond between people and their cars — from road trips and car reviews to maintenance tips and the latest automotive trends.
        </p>
        <button className="bg-[#ff5959] w-max  text-[#f0f0f0] py-[12px] flex px-6 md:py-[18px] md:px-8 font-bold rounded hover:border-collapse hover:bg-[#f0f0f0] hover:text-black">
            Subscribe <FiSend />
         </button>
      </div>
    </div>
    </div>
  )
}

export default Mokeup