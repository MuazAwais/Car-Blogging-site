import { useEffect, useState } from "react"
import NewTechnology from "../../components/shared/newTechnology"
import Mokeup from "./mokeup"
import Latest from "./latest"
import TrendingBlogs from "./trendingBlogs"
import AllCategory from "../../components/shared/allCategory"
import Testimonials from "./testimonials"
import { blogAPI } from "../../lib/api"
import { BlogsData, BlogsV2 } from "../../lib/data"

const Home = () => {
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
        console.log('Fetched blogs:', data)
        
        if (data && data.length > 0) {
          setBlogs(data)
          setUsingFallback(false)
        } else {
          // If API returns empty array, use fallback data
          console.warn('API returned empty data, using fallback')
          setBlogs(BlogsData)
          setUsingFallback(true)
        }
      } catch (err) {
        console.error('Error fetching blogs:', err)
        setError(err.message)
        // Use fallback data if API fails
        console.log('Using fallback data due to API error')
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
          <p className="text-sm text-gray-600 mb-4">
            Make sure the backend server is running on http://localhost:5000
          </p>
          <p className="text-sm text-gray-500">
            Using fallback data for now. Please start the backend server.
          </p>
        </div>
      </div>
    )
  }

  // Get latest and trending blogs
  const latestBlogs = blogs.filter(blog => blog.isLatest)
  const trendingBlogs = blogs.filter(blog => blog.isTrending)
  const regularBlogs = blogs.filter(blog => !blog.isLatest && !blog.isTrending)

  return (
    <div className="">
      {usingFallback && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <p className="font-bold">Note:</p>
          <p className="text-sm">Using fallback data. Please ensure the backend server is running.</p>
        </div>
      )}
      <Mokeup/>
      <div className='max-w-[1280px] grid lg:grid-cols-2 mx-auto gap-4 px-4'>
        <Latest data={latestBlogs.length > 0 ? latestBlogs : blogs}/>
        <TrendingBlogs data={trendingBlogs.length > 0 ? trendingBlogs : blogs}/>
      </div>
      <NewTechnology data={blogs}/>
      <hr className='max-w-[1180px] mx-auto border-t-2 border-gray-300' />
      <AllCategory/>
      <Testimonials />
      <NewTechnology data={regularBlogs.length > 0 ? regularBlogs : (usingFallback ? BlogsV2 : blogs)}/>
    </div>
  )
}

export default Home