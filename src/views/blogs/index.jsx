import { useEffect, useState } from "react"
import Mokeup from "./mokeup"
import NewArticle from "../../components/shared/newArticle"
import AllCategory from "../../components/shared/allCategory"
import { blogAPI } from "../../lib/api"
import { BlogsData } from "../../lib/data"

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [usingFallback, setUsingFallback] = useState(false)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await blogAPI.getAll()
        if (data && data.length > 0) {
          setBlogs(data)
          setUsingFallback(false)
        } else {
          setBlogs(BlogsData)
          setUsingFallback(true)
        }
      } catch (err) {
        setError(err.message)
        console.error('Error fetching blogs:', err)
        setBlogs(BlogsData)
        setUsingFallback(true)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-xl mb-2">Loading blogs...</p>
          <p className="text-sm text-gray-500">Connecting to server...</p>
        </div>
      </div>
    )
  }

  if (error && !usingFallback) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center max-w-md p-4">
          <p className="text-xl text-red-600 mb-2">Error: {error}</p>
          <p className="text-sm text-gray-600">
            Using fallback data. Please start the backend server.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {usingFallback && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <p className="font-bold">Note:</p>
          <p className="text-sm">Using fallback data. Please ensure the backend server is running.</p>
        </div>
      )}
      <Mokeup />
      <NewArticle data={blogs} />
      <hr className="border-b-2 my-2 mx-10 " />
      <AllCategory />
    </div>
  )
}

export default BlogsPage