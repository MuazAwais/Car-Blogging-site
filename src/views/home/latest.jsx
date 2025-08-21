const Latest = ({ data }) => {
  return (
    <div className="pt-[30px] md:pt-[60px] font-poppins">
      <div>
        <h3 className="text-[30px] md:text-[36px] font-bold font-poppins ">Latest</h3>
      </div>
      <div>
        {data?.slice(0, 1).map((blog) => (
          <div key={blog?.id} className="flex flex-col gap-4 md:gap-8 ">
            <div className="">
              <img src={blog?.img} alt={blog?.title} className="w-full h-auto rounded-lg"/>
            </div>
            <div className="flex gap-2">
              <p>By</p>
              <p className=" text-[#FF6666]">{blog?.authorName}</p>
              <div className="border-l-2 border-black h-5"></div>
              <p className="text-[14px]">{blog?.date}</p>
            </div>
            <h4 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold">{blog?.title}</h4>
            <p className="text-[14px] md:text-[16px]">{blog?.content}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-8">
        <button className="bg-[#FF6666] text-white py-3 px-14 rounded hover:bg-[#FF4C4C]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Latest;
