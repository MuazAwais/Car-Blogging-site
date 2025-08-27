import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { FaDiscord} from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const validationSchema = Yup.object({
    yourName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Your name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Too Short!")
      .max(500, "Too Long!")
      .required("Message is required"),
  });
  const formik = useFormik({
    initialValues: {
      yourName: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="max-w-[960px] mx-auto p-4 font-poppins ">
      <div className="max-w-[480px] mx-auto text-center my-[40px]">
        <h2 className="text-[40px] font-bold">Contact Us</h2>
        <span className="text-[18px]">
          Any question or remarks? Just write us a message!
        </span>
      </div>
      <div className="mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-8 border-2 w-full">
        <div className="bg-[#232536] text-[#ffffff] max-w-[480px] flex flex-col justify-around p-[40px]">
          <div>
            <h2 className="font-semibold text-[28px]">Contact Information</h2>
            <p className="text-[16px]">
              Say something to start a live chat!
            </p>
          </div>
          <div className="text-[20px] mt-[40px]">
            <p className="flex gap-4 py-6 items-center">
              <MdPhoneInTalk /> +1012 2456 7890
            </p>
            <p className="flex gap-4 py-6 items-center">
              <MdEmail /> info@carblog.com
            </p>
            <p className="flex gap-4 py-6 items-center">
              <FaLocationDot /> 123 Main St, Anytown, USA
            </p>
          </div>
          <div className="flex gap-8 text-[20px] mt-[46px]">
            <span className="px-2 py-2 rounded-full hover:bg-white hover:text-black hover:transition-all duration-1000">
              <FaXTwitter />
            </span>
            <span className="px-2 py-2 rounded-full hover:bg-white hover:text-black hover:transition-all duration-1000">
              <LuInstagram />
            </span>
            <span className="px-2 py-2 rounded-full hover:bg-white hover:text-black hover:transition-all duration-1000">
              <FaDiscord />
            </span>
          </div>
        </div>
        <div className="max-w-[480px] mx-auto mt-[40px] ">
          <h2 className="font-semibold text-[28px]">Send Us a Message</h2>
          <form
            className="flex flex-col mt-[20px]"
            onSubmit={formik.handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 mb-4 border-b border-gray-300 rounded"
              value={formik.values.yourName}
              onChange={formik.handleChange}
              name="yourName"
            />
            <div>
              {" "}
              {formik.errors.yourName && formik.touched.yourName && (
                <p className="mt-1 text-sm text-red-600">
                  {formik.errors.yourName}
                </p>
              )}
            </div>
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 mb-4 border-b border-gray-300 rounded"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
            />
            <div>
              {formik.errors.email && formik.touched.email && (
                <p className="mt-1 text-sm text-red-600">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <textarea
              placeholder="Your Message"
              className="p-2 mb-4 border-b border-gray-300 rounded"
              rows="4"
              value={formik.values.message}
              onChange={formik.handleChange}
              name="message"
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
