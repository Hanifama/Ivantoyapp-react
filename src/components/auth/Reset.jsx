import React from 'react'
import loginImg from '../../images/forgot.png'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Reset = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
        {/* Login Page */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
            {/* Form */}
            <motion.div 
            initial={{opacity : 0, x : 200 }}
            animate={{opacity : 1, x : 0 }}
            exit={{opacity : 0, x : 200 }}
            className="w-1/2 px-16 sm:w-1/2"
            >
                <h2 className="font-bold text-2xl text-textColor">Reset</h2>
                <p className="text-sm mt-4">Lupa Password Tenang Saja Masukan Emailmu Disini</p>

                <form action="" className="flex flex-col gap-4">
                    <input 
                    className="p-2 mt-3 rounded-xl border bg-white text-textColor"
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    />
                </form>

                <div className="flex mt-2">
                    <Link to={"/register"}>
                    <p className=" text-xs  w-1/2">Register?</p>
                    </Link>
                    <Link to={"/login"}>
                    <p className=" text-xs">Login?</p>
                    </Link>
                </div>

                
            </motion.div>

            {/* Image */}
            <motion.div 
                initial={{opacity : 0, x : 200 }}
                animate={{opacity : 1, x : 0 }}
                exit={{opacity : 0, x : 200 }}
            className="sm:block hidden w-1/2">
                <img src={loginImg} alt="Login" className="rounded-2xl" />
            </motion.div>
        </div>
    </div>
  )
}

export default Reset