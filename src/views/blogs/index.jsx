import { useEffect, useState } from "react"
import Mokeup from "./mokeup"
import NewArticle from "../../components/shared/newArticle"
import AllCategory from "../../components/shared/allCategory"
import { blogAPI } from "../../lib/api"

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true)
        const data = await blogAPI.getAll()
        setBlogs(data)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching blogs:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    )
  }

  return (
    <div>
      <Mokeup />
      <NewArticle data={blogs} />
      <hr className="border-b-2 my-2 mx-10 " />
      <AllCategory />
    </div>
  )
}

export default BlogsPage