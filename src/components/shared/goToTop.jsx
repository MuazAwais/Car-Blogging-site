import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };
    useEffect(() => {
        const handleScroll = () => {
            const button = document.getElementById("go-to-top");
            if (button) {
                button.style.display = window.scrollY > 300 ? "block" : "none";
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
    <div className="fixed bottom-4 right-4">
        <button onClick={scrollToTop} id="go-to-top" className="p-3 bg-[#ff5959] text-white rounded-full shadow-lg hover:bg-[#ff4747] transition">
            <FaArrowUp className="animate-bounce" />
        </button>
    </div>
  )
}

export default GoToTop