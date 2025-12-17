
import Navbar from './navbar'
import Footer from './footer'
import GoToTop from '../shared/goToTop'
import ApiStatus from '../debug/ApiStatus'

function Layout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
        <GoToTop />
        {import.meta.env.DEV && <ApiStatus />}
    </div>
  )
}

export default Layout