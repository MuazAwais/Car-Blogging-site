import { useState } from "react";
import { FiSend, FiX } from "react-icons/fi";


const Subscription = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div>
        <button onClick={handleToggle} className="bg-[#ff5959] text-[#ffffff] py-3 px-10 font-bold rounded hover:border-collapse hover:bg-[#f0f0f0] hover:text-[#232536] flex">
            Subscribe <FiSend />
        </button>
        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-[#232536] p-8 rounded-lg text-white relative">
                    <FiX className="absolute top-4 right-4 cursor-pointer" onClick={handleToggle} />
                   <h2 className="font-bold text-[28px]">Subscribe to site</h2>
                   <form action="Subscribe" className="flex flex-col gap-3 mt-4">
                    <label htmlFor="email" className="text-lg font-bold ">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email:" required className="p-2 rounded-lg  border-2 border-black mb-4 w-full " />
                    <button type="submit" className="bg-[#ff5959] text-[#ffffff] py-2 px-4 rounded hover:bg-[#f0f0f0] hover:text-[#232536]" onClick={handleToggle}>Subscribe</button>
                   </form>
                </div>
            </div>
        )}
    </div>
  )
}

export default Subscription