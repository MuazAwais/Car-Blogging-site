// SingleBlogView.jsx
import { useParams } from "react-router-dom";

const SingleBlogView = ({ data }) => {
  const { id } = useParams();
  const blog = data?.find((item) => item?.id.toString() === id); // match ID

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="max-w-[1280px] mx-auto px-1 py-2 md:px-4 md:py-8">
      <h1 className="text-2xl font-bold mb-4 sm:text-[28px] md:text-[32px] lg:text-[36px]">{blog?.title}</h1>
      <img
        src={blog?.img}
        alt={blog?.title}
        className="w-full h-auto rounded-lg mb-3"
      />
      <div className="flex items-center gap-2 mb-8">
        <img
          src={blog?.authorAvatar}
          alt={blog?.authorName}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-bold text-sm">{blog?.authorName}</p>
          <p className="text-[10px] text-gray-500">{blog?.date} · 3 Min Read</p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-sm sm:text-md md:text-lg">{blog?.content}</p>
        <p className="text-sm sm:text-md md:text-lg">{blog?.content}</p>
        <p className="text-sm sm:text-md md:text-lg">{blog?.content}</p>
      </div>
    </div>
  );
};

export default SingleBlogView;
