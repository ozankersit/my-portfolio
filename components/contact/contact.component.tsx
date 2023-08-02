import MailIcon from '@/icons/mail-icon.component'
import React from 'react'

const Contact = () => {
  return (
    <div className='mt-10 bg-white w-screen p-10 shadow-sm flex flex-col justify-center items-center' id='contact'>
      <span className='underline text-4xl font-extrabold'>Contact</span>
      <div className='flex items-center mt-5 gap-4 flex-wrap justify-center'>
        <div>
          <MailIcon/>
        </div>
        <span className='text-blue text-2xl font-semibold'>
          ozankersit@gmail.com
        </span>
      </div>
    </div>
  )
}

export default Contact