import Mokeup from './mokeup'
import { Blogs } from '../../lib/data'
import ContactForm from './contectForm'
import { Toaster } from 'sonner'



function Contact() {
  return (
    <div className=' mx-auto mb-[100px]'>
      <Mokeup data={Blogs}/>
      <ContactForm />
      <Toaster />
    </div>
  )
}

export default Contact