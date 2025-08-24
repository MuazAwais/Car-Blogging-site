const NewArticle = ({ data }) => {
  return (
    <>
      <div className="max-w-[1280px] mx-auto px-2 ">
        <h1 className="text-3xl font-bold my-8">All Posts</h1>
        <hr className="my-4 border-t border-gray-300" />
        {data?.slice(1, 5).map((item) => (
          <div
            key={item.id}
            className="max-w-[1160px] mx-auto flex flex-col lg:flex-row my-10 gap-4"
          >
            <div className="">
              <img
                src={item?.img}
                alt={item?.title}
                className="w-full h-auto rounded-lg object-cover "
              />
            </div>
            <div className="lg:max-w-[660px] gap-2 lg:gap-6 flex flex-col">
              <h3 className="text-[20px] md:text-[24px] font-bold">
                {item.title}
              </h3>
              <div className="flex gap-2 item-center">
                <div className="w-10 h-10">
                  <img
                    src={item.authorAvatar}
                    alt=""
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="text-[10px] sm:text-[12px] flex flex-col justify-center">
                  <p className="font-bold">{item.authorName}</p>
                  <div className="flex gap-1 text-[12px]">
                    <p>{item.date}</p>
                    <span className="font-extrabold">.</span>
                    <p>3 Min Read</p>
                  </div>
                </div>
              </div>
              <div className="gap-6 lg:gap-14 flex flex-col">
                <p className="text-[14px] md:text-[16px]">{item.content}</p>
                <button className="bg-[#ff5959] text-white font-bold text-[12px] md:text-[14px] px-2 py-1 md:px-5 md:py-2  rounded-md w-fit hover:bg-[#d46069] hover:shadow-lg active:text-gray-50 active:bg-[#77232a]">
                  Read full article...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewArticle;
