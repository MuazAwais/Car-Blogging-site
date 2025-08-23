import React from "react";
import categories from "../../lib/data/category/category";
function AllCategory() {
  const category = categories.slice(0, 4);
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-11  py-8 font-poppins">
      <div className="flex">
        <h3 className="text-[24px] md:text-[32px] font-bold">All Category</h3>
        <div className="border-b-4 mx-4 mb-4  border-black w-8"></div>
      </div>
      <div className="grid grid-cols-1 justify-self-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {category.map((category) => (
          <div
            key={category.id}
            className="max-w-[255px] w-full px-4 py-6 mx-auto bg-[#D9D9D9] hover:bg-slate-200 transition-colors rounded-lg flex flex-col gap-2 justify-center items-center"
          >
            <div className="max-w-[90px] mx-auto w-full mb-4">
              <img src={category.Image} alt={category.title} className="w-full h-auto rounded-lg object-cover" />
            </div>
            <h3 className="text-lg font-semibold">{category.title}</h3>
            <p className="text-[14px] text-gray-600 text-center">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCategory;
