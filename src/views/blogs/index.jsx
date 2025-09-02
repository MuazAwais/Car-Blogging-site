import Mokeup from "./mokeup"
import { BlogsData } from "../../lib/data"
import NewArticle from "../../components/shared/newArticle"
import AllCategory from "../../components/shared/allCategory"

const BlogsPage = () => {
  return (
    <div>
      <Mokeup />
      <NewArticle data={BlogsData} />
      <hr className="border-b-2 my-2 mx-10 " />
      <AllCategory />
    </div>
  )
}

export default BlogsPage