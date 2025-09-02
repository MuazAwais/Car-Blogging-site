import Mokeup from './mokeup'
import { BlogsData } from '../../lib/data'
import ContactForm from './contectForm'


function Contact() {
  return (
    <div className=' mx-auto mb-[100px]'>
      <Mokeup data={BlogsData}/>
      <ContactForm />
    </div>
  )
}

export default Contact