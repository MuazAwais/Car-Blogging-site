import Mokeup from './mokeup'
import { Blogs } from '../../lib/data'
import ContactForm from './contectForm'



function Contact() {
  return (
    <div className=' mx-auto mb-[100px]'>
      <Mokeup data={Blogs}/>
      <ContactForm />
    </div>
  )
}

export default Contact