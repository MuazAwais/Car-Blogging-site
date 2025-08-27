import { Link } from "react-router-dom";

const TrendingBlogs = ({ data }) => {
  return (
    <div className="pt-[10px] md:pt-[20px] font-poppins">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-[27px] sm:text-[30px] md:text-[36px] font-bold">Trending Blogs</h3>
        <Link to="/blogs" className="text-[16px] font-semibold">
          See all
        </Link>
      </div>
      <div className="flex flex-col">
        {data?.slice(0, 5).map((blog) => (
          <div
            key={blog?.id}
            className="flex flex-col gap-2 odd:bg-[#FF6666] odd:text-white  p-4 rounded hover:cursor-pointer"
          >
            <div className="flex gap-2">
              <p className="text-[12px]">By</p>
              <p className="font-bold text-[12px]">{blog?.authorName}</p>
              <div className="border-l-2 border-black h-4"></div>
              <p className="text-[12px]">{blog?.date}</p>
            </div>
            <h4 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold">{blog?.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingBlogs;
