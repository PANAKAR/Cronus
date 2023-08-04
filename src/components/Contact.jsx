import {React, useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn, textVariant } from '../utils/motion'
import {EarthCanvas} from './canvas/index'
import Footer from './Footer'

//template_cuj93vs
//service_25gj6l8
//iFfq4Wc9Jyuv0VRjT

const  Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const[loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const{name, value} = e.target;
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_25gj6l8',
      'template_cuj93vs',
      {
        from_name: form.name,
        to_name: 'Dsb Media',
        from_email: form.email,
        to_email: 'dsbmediawork23@gmail.com',
        message: form.message,
      },
      'iFfq4Wc9Jyuv0VRjT'
    )
    .then(() => {
      setLoading(false);
      alert('Thank You. We will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }), (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong! Please try again!!!')
    }
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden z-10" style={{zIndex: "10", background: "none"}}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2 , 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        style={{borderRadius: "85px"}}
      >
        <p className="text-gray" style={{background: "none", color: "white"}}>Get in touch</p>
        <h1 className="text-white font-bold" style={{background: "none"}}>Contact.</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"  
          style={{background: "none", width: "100%"}}
        >
          <label className="flex flex-col" style={{background: "none"}}>
            <span className="text-white font-medium mb-4" style={{background: "none"}}>Your Name</span>
            <input 
              type='text'
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black bg-white rounded-lg outlined-none border-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col" style={{background: "none"}}>
            <span className="text-white font-medium mb-4" style={{background: "none"}}>Your Email</span>
            <input 
              type='email'
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email?"
              className="bg-tertiary py-4 px-6 placeholder:black text-black bg-white rounded-lg outlined-none border-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col" style={{background: "none"}}>
            <span className="text-white font-medium mb-4" style={{background: "none"}}>Your Message</span>
            <textarea 
              rows="7"
              type='text'
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black bg-white rounded-lg outlined-none border-none font-medium"
            ></textarea>
          </label>

          <button
            type="submit"
            className="bg-black py-3 px-8 outline-none w-git text-white font-bold shadow-md shadow-primary rounded-3xl"
          >
            {loading ? 'sending...' : 'send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");
