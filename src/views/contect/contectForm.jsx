import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { FaDiscord} from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

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
    onSubmit: (values, { resetForm }) => {
      toast("Form submitted successfully!")
      const jsonData = JSON.stringify(values, null, 2);
      window.localStorage.setItem("contactFormData", jsonData);
      console.log(jsonData);
      resetForm();
    },
  });
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;
  return (
    <div className="max-w-[960px] mx-auto p-4 font-poppins ">
      <div className="max-w-[480px] mx-auto text-center my-[40px]">
        <h2 className="text-[40px] font-bold">Contact Us</h2>
        <span className="text-[18px]">
          Any question or remarks? Just write us a message!
        </span>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 border-2 w-full rounded-xl">
        <div className="bg-[#232536] text-[#ffffff] flex flex-col justify-around w-full items-center p-10 rounded-b-xl md:rounded-l-xl md:rounded-br-none">
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
              <Link to='https://twitter.com/i/flow/login'>
                <FaXTwitter />
              </Link>
            </span>
            <span className="px-2 py-2 rounded-full hover:bg-white hover:text-black hover:transition-all duration-1000">
              <Link to='https://www.instagram.com/'>
                <LuInstagram />
              </Link>
            </span>
            <span className="px-2 py-2 rounded-full hover:bg-white hover:text-black hover:transition-all duration-1000">
              <Link to='https://discord.com/'>
                <FaDiscord />
              </Link>
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col p-10 gap-2.5">
          <h2 className="font-semibold text-[28px]">Send Us a Message</h2>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className={`p-2 mb-4 border-b border-gray-300 rounded w-full  ${
                    errors.yourName && touched.yourName
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
              value={values.yourName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="yourName"
            />
              {errors.yourName && touched.yourName && (
                <p className="text-sm text-red-600 absolute top-10">
                  {errors.yourName}
                </p>
              )}
            </div>
            <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className={`p-2 mb-4 border-b border-gray-300 w-full ${
                    errors.email && touched.email
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
            />
              {errors.email && touched.email && (
                <p className="text-sm text-red-600 absolute top-10">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="relative">
            <textarea
              placeholder="Your Message"
              className={`p-2 border-b border-gray-300 rounded w-full ${
                    errors.message && touched.message
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
              rows="4"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              name="message"
            ></textarea>
            {errors.message && touched.message && (
              <p className="text-sm text-red-600 absolute top-[115px]">
                {errors.message}
              </p>
            )}
            </div>
            <button
              type="submit"
              className="bg-[#ff5959] text-[#ffffff] py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* {isToast && <Toast message="Form submitted successfully!" />} */}
      <Toaster richColors />
    </div>
  );
};

export default ContactForm;
