const NewTechnology = ({ data }) => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-5 font-poppins">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <h2 className="text-[25px] sm:text-[30px] md:text-[36px] font-bold ">
            New Technology
          </h2>
          <div className="border-b-4 mb-4 border-black w-8 hidden sm:block"></div>
        </div>
        <p className="text-[16px] font-semibold">See all</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {data?.slice(1, 5).map((post) => (
          <div
            key={post?.id}
            className=" p-4 mx-auto border rounded-lg bg-[#D9D9D9] hover:bg-slate-200 transition-colors"
          >
            <div className="w-full ">
              <img src={post?.img} alt={post?.title}  className="w-full h-auto rounded-lg object-cover"/>
            </div>
            {post?.author ? (
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold mt-2">{post?.title}</h3>
                <div className="mt-8">
                  <div className="flex items-center">
                    <img
                      src={post?.authorAvatar}
                      alt={post?.authorName}
                      className="w-12 h-12 rounded-full object-cover mr-2"
                    />
                    <div>
                      <h4 className="text-sm font-semibold">
                        {post?.authorName}
                      </h4>
                      <p className="text-[12px] text-gray-600">
                        Joined: {post?.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h3 className="text-lg font-semibold mt-2">{post?.title}</h3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewTechnology;
