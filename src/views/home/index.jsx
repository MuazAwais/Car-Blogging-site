import { useEffect, useState } from "react"
import NewTechnology from "../../components/shared/newTechnology"
import Mokeup from "./mokeup"
import Latest from "./latest"
import TrendingBlogs from "./trendingBlogs"
import AllCategory from "../../components/shared/allCategory"
import Testimonials from "./testimonials"
import { blogAPI } from "../../lib/api"

const Home = () => {
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

  // Get latest and trending blogs
  const latestBlogs = blogs.filter(blog => blog.isLatest)
  const trendingBlogs = blogs.filter(blog => blog.isTrending)
  const regularBlogs = blogs.filter(blog => !blog.isLatest && !blog.isTrending)

  return (
    <div className="">
      <Mokeup/>
      <div className='max-w-[1280px] grid lg:grid-cols-2 mx-auto gap-4 px-4'>
        <Latest data={latestBlogs.length > 0 ? latestBlogs : blogs}/>
        <TrendingBlogs data={trendingBlogs.length > 0 ? trendingBlogs : blogs}/>
      </div>
      <NewTechnology data={blogs}/>
      <hr className='max-w-[1180px] mx-auto border-t-2 border-gray-300' />
      <AllCategory/>
      <Testimonials />
      <NewTechnology data={regularBlogs.length > 0 ? regularBlogs : blogs}/>
    </div>
  )
}

export default Home