
import Navbar from './navbar'
import Footer from './footer'
import GoToTop from '../shared/goToTop'

function Layout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
        <GoToTop />
    </div>
  )
}

export default Layout