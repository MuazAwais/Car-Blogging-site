const NewArticle = ({ data }) => {
  return (
    <>
      <div className="max-w-[1280px] mx-auto px-2 ">
        <h1 className="text-3xl font-bold my-8">All Posts</h1>
        <hr className="my-4 border-t border-gray-300" />
        {data?.slice(1,5).map((item) => (
          <div key={item.id} className="max-w-[1160px] mx-auto flex flex-col lg:flex-row my-7">
            <div className="flex flex-col gap-4 mr-[20px]">
              <img src={item?.img} alt={item?.title} className="w-full h-auto rounded-lg"/>
            </div>
            <div className="lg:max-w-[660px] gap-4 flex flex-col">
              <h3 className="text-[24px] font-bold">{item.title}</h3>
              <div className="flex gap-4 item-center">
                <div className="py-1">
                  <img src={item.authorAvatar} alt="" />
                </div>
                <div className="text-[12px] sm:text-[14px] flex flex-col justify-center">
                  <p className="font-bold">{item.authorName}</p>
                  <div className="flex gap-3">
                    <p>{item.date}</p>
                    <span className="font-extrabold" >.</span>
                    <p>3 Min Read</p>
                  </div>
                </div>
              </div>
              <p>{item.content}</p>
              <button className="bg-[#ff5959] text-white font-bold text- px-5 py-2 rounded-md max-w-[200px] hover:bg-[#ff5966] hover:shadow-lg active:text-black">
                Read full article...
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewArticle;
