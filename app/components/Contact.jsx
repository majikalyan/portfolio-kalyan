import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
// const expEmail = RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')

const Contact = () => {
  // const [input, setInput] = useState({ name: "", email: "", message: "", errors: { name: "", email: "", message: "" } })
  const [result, setResult] = useState("");

  // const changeHandler = (event) => {
  //   let { name, value } = event.target;
  //   let err = { ...input.errors };
  //   switch (name) {
  //     case "name": err.name = value.length < 1 ? "required field*" : value.length < 2 ? "minimum 2 characters required*" : "";
  //       break;
  //     case "mail": err.email = value.length < 1 ? "required field*" : expEmail.test(value) ? "" : "invalid format";
  //       break;
  //     case "message": err.message = value.length < 1 ? "required field*" : "";
  //       break;
  //     default: console.log('NA');
  //   }
  //   setInput({ ...input, [name]: value, errors: err })
  //   setResult("")
  // }

  const onSubmit = async (event) => {
    event.preventDefault();
    // if(!input.name || !input.email || !input.message){
    //   setResult("All fields required")
    //   return
    // }
    // else{
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c65a9113-64bf-498a-a955-e691726cc2cc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  // }
  };
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
      id='contact' className='w-full px-[12%] py-10 scroll-mt-20  bg-no-repeat bg-[length:90%_auto] bg-center'>
      <motion.h4 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg '>Connect with me
      </motion.h4>
      <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center  text-5xl '>Get in touch
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 '>
        I'd love to hear from you!If you have any questions ,comments, or feedback, please use the form below.
      </motion.p>
      <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 mb-8'>
          <motion.input initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
            type="text" name='name' placeholder='Enter your name' required  className='flex-1 p-3 outline-none border-[0.5px] border-white/90 rounded-md bg-[#7969c9]/30 ' />
          {/* {
            input.errors && input.errors.name.length > 0 ? <p className='text-red-500 text-sm mt-4'>{input.errors.name}</p> : null
          } */}

          <motion.input initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
            type="email" name='email' placeholder='Enter your email' required   className='flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-[#7969c9]/30 border-white/90 ' />
        </div>

        <motion.textarea initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
          rows='6' placeholder='Enter your message' name='message' required 
          className='w-full p-4 outline-none border-[0.5px] border-gray-500 rounded-md bg-[#7969c9]/30 mb-6 border-white/90 '
        ></motion.textarea>

        <motion.button transition={{ duration: 0.3 }}
          className='py-3 px-8 w-max flex items-center justify-between gap-2 text-white rounded-md mx-auto hover:bg-[#2a004a] duration-500 bg-transparent border-[0.5px] cursor-pointer ' type='submit'>
          Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </motion.button>
        <p className='mt-4 text-#f0d9f8 text-lg'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact