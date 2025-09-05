import AboutDetail from "./aboutDetails"
import Mokeup from "./mockup"
import AllCategory from "../../components/shared/allCategory"
const About = () => {
  return (
    <div className=''>
      <Mokeup/>
      <div className="max-w-[1280px] mx-auto">
        <AboutDetail />
      </div>
      <hr className="max-w-[1200px] mx-auto border-b-2 mt-6"/>
      <AllCategory />
    </div>
  )
}

export default About