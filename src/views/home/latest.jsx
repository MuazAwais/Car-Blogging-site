const Latest = ({ data }) => {
  return (
    <div className="pt-[10px] md:pt-[20px] font-poppins">
      <div>
        <h3 className="text-[30px] md:text-[36px] font-bold font-poppins mb-3">
          Latest
        </h3>
      </div>
      <div>
        {data?.slice(0, 1).map((blog) => (
          <div key={blog?.id} className="flex flex-col gap-2 md:gap-3 ">
            <div className="flex flex-col gap-1">
              <div className="">
                <img
                  src={blog?.img}
                  alt={blog?.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex gap-2 pl-3">
                <p className="text-[12px]">By</p>
                <p className="text-[#FF6666] text-[12px]">{blog?.authorName}</p>
                <div className="border-l-2 border-black h-4"></div>
                <p className="text-[12px]">{blog?.date}</p>
              </div>
            </div>
            <h4 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
              {blog?.title}
            </h4>
            <p className="text-[14px] md:text-[16px]">{blog?.content}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-4">
        <button className="bg-[#ff5959] w-max  text-[#f0f0f0] py-[12px] flex px-6 md:py-[18px] md:px-8 font-bold rounded hover:border-collapse hover:bg-[#f0f0f0] hover:text-black">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Latest;
