import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMail} from 'react-icons/ai'
import {SiMinutemailer} from 'react-icons/si'
import {MdOutlineContactPhone} from 'react-icons/md'
import {GrInstagram} from 'react-icons/gr'
import {BsYoutube} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import MainHeader from '../header/MainHeader'


const Cperson = () => {
  return (
    <section>
    <MainHeader/>
    <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
     <div className="flex w-full min-h-screen justify-center items-center bg-blue-50">
        <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-headingColor w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
            <div className="flex flex-col space-y-8 justify-between">

                <div className="">
                    <h1 className='font-semibold text-4xl tracking-wide'>Hubungi Kami</h1>
                    <p className='pt-2 text-white text-sm mr-[300px]'>
                        Kami Siap Melayani 24 jam
                    </p>
                </div>

                <div className="flex flex-col space-y-6">
                    <div className="inline-flex space-x-2 items-center">
                        <MdOutlineContactPhone className='text-xl mr-2'/> (021) 12345678
                    </div>
                
                    <div className="inline-flex space-x-2 items-center">
                        <AiOutlineMail className='text-xl mr-2'/> ptlskkbdg@gmail.com
                    </div>
                    
                    <div className="inline-flex space-x-2 items-center">
                        <SiMinutemailer className='text-xl mr-2'/> 0898987678987
                    </div>
                </div>

                <div className="flex space-x-4 text-lg">
                    <AiFillFacebook/>
                    <AiFillTwitterSquare/>
                    <BsYoutube/>
                    <GrInstagram/>
                </div>

            </div>

            <div className="">
                <div className="bg-white rounded-xl shadow-lg p-8 text-textColor">
                    <form action="" className='flex flex-col space-y-4'>
                        <div className="">
                            <label htmlFor="" className='text-sm'>Nama</label>
                            <input type="text" 
                            placeholder='Nama' 
                            className='ring-1 ring-gray-500 w-full rounded-md mt-2 px-4 py-2 outline-none focus:ring-2 focus:ring-teal-100'/>
                        </div>
                        <div className="">
                            <label htmlFor="" className='text-sm'>Email</label>
                        
                            <input type="email" 
                            placeholder='Email' 
                            className='ring-1 ring-gray-500 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-100'/>
                        </div>
                        <div className="">
                            <label htmlFor="" className='text-sm'>Pesan</label>
                        
                            <textarea
                            rows={4}
                            placeholder='Pesan anda disini ' 
                            className='ring-1 ring-gray-500 w-full rounded-md px-4 py-2 mt-2 outline-none
                             focus:ring-2 focus:ring-teal-100'/>
                        </div>

                        <button className="inline-block self-end bg-headingColor text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Kirim Pesan</button>
                    </form>
                </div>
            </div>

        </div>
     </div>
    </main>
    
  </section>


    
  )
}

export default Cperson
