import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
// And now we can use these
const ContactForm = () => {
  return (
    <div className="max-w-[960px] mx-auto p-4 font-poppins ">
      <div className="max-w-[480px] mx-auto text-center my-[40px]">
        <h2 className="text-[40px] font-bold">Contact Us</h2>
        <span className="text-[18px]">
          Any question or remarks? Just write us a message!
        </span>
      </div>
      <div className="max-w-[962px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-2 ">
        <div className="bg-[#232536] text-[#ffffff] max-w-[480px] flex flex-col justify-around p-[40px]">
          <div>
            <h2 className="font-semibold text-[28px]">Contact Information</h2>
            <p className="text-[18px] px-4">
              Say something to start a live chat!
            </p>
          </div>
          <div className="text-[20px] mt-[40px]">
            <p className="flex gap-4 py-6">
              <MdPhoneInTalk /> +1012 2456 7890
            </p>
            <p className="flex gap-4 py-6">
              <MdEmail /> info@carblog.com
            </p>
            <p className="flex gap-4 py-6">
              <FaLocationDot /> 123 Main St, Anytown, USA
            </p>
          </div>
          <div className="flex gap-8 text-[20px] mt-[46px]">
            <span className="px-2 py-2 rounded-full hover:bg-white hover:text-black">
              <FaTwitter />
            </span>
            <span className="px-2 py-2 rounded-full hover:bg-white hover:text-black">
              <LuInstagram />
            </span>
            <span className="px-2 py-2 rounded-full hover:bg-white hover:text-black">
              <FaDiscord />
            </span>
          </div>
        </div>
        <div className="max-w-[480px] mx-auto mt-[40px] ">
          <h2 className="font-semibold text-[28px]">Send Us a Message</h2>
          <form className="flex flex-col mt-[20px]">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 mb-4 border-b border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 mb-4 border-b border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="p-2 mb-4 border-b border-gray-300 rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-[#ff5959] text-[#ffffff] py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
