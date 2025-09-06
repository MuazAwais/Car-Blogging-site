import React from "react";
import { FiX } from "react-icons/fi";

function Subscription({ open, onClose }) {
  if (!open) return null; 
  const [email, setEmail] = React.useState("");

  const handleChange = (e) => {
    
    setEmail(e.target.value);
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center text-white justify-center bg-black/50">
      {/* Modal content */}
      <div className="bg-[#232536] w-[90%] max-w-md rounded-2xl shadow-lg p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
        >
          <FiX size={24} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-center">
          Subscribe to Our Newsletter
        </h2>

        {/* Input + Button */}
        <form className="flex flex-col gap-4" >
            <label htmlFor="email" className="text-sm font-semibold">
              Email:
            </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
            value={email}
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <button
            type="submit"
            className="bg-[#ff5959] text-white py-3 px-10 w-fit rounded-lg font-bold hover:bg-[#e64e4e] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscription;
