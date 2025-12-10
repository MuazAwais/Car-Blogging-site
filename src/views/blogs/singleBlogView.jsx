// SingleBlogView.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogAPI } from "../../lib/api";

const SingleBlogView = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const data = await blogAPI.getById(id);
        setBlog(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching blog:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-600">Blog not found.</p>
      </div>
    );
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
          <p className="text-[10px] text-gray-500">{blog?.date} · {Math.ceil(blog?.content?.length / 200)} Min Read</p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-sm sm:text-md md:text-lg whitespace-pre-line">{blog?.content}</p>
      </div>
    </div>
  );
};

export default SingleBlogView;
