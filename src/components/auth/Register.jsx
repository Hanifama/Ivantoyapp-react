import React, { useState } from 'react'
import regsImg from '../../images/register.png'
import { Link, useNavigate } from 'react-router-dom'

import {FaEye, FaEyeSlash} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { motion } from 'framer-motion'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from '../../firebase.config'


const Register = () => {
    const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [isLoader, setIsLoader] = useState(false)

  const navigate = useNavigate()

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword){
      toast.error("Harap masukan password valid")
    }

    setIsLoader(true)

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      setIsLoader(false)
      toast.success("Selamat Register Berhasil...")
      navigate("/login")
      // ...
    })
    .catch((error) => {
      toast.error(error.message);
      setIsLoader(false)
      // ..
    });

  }
  return (
    <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
      <div className="w-full h-auto flex flex-col items-center justify-center">
    {/* Register Page */}
    <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
        
        {/* Image */}
        <motion.div 
        initial={{opacity : 0, y : 200 }}
        animate={{opacity : 1, y : 0 }}
        exit={{opacity : 0, x : 200 }}
        className="sm:block hidden w-1/2">
            <img src={regsImg} alt="Login" className="rounded-2xl" />
        </motion.div>

        {/* Form */}
        <motion.div 
        initial={{opacity : 0, y : 200 }}
        animate={{opacity : 1, y : 0 }}
        exit={{opacity : 0, x : 200 }}
        className="w-1/2 px-16 sm:w-1/2">
            <h2 className="font-bold text-2xl text-textColor">Register</h2>
            <p className="text-sm mt-4">Tekido Menemani Teknologi Anda</p>

            <form onSubmit={registerUser} className="flex flex-col gap-4">
                <input 
                className="p-2 mt-8 rounded-xl border bg-white text-textColor"
                type="email" 
                name="email" 
                placeholder="Email"
                value={email}  
                onChange={(e) => 
                setEmail(e.target.value)} 
                />
                <div className="relative">
                    <input 
                    className="p-2 rounded-xl w-full border bg-white text-textColor"
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={password}  
                    onChange={(e) => 
                    setPassword(e.target.value)}
                    />
                    <FaEye className="absolute top-1/2 right-3 -translate-y-1/2 "/>                   
                </div>
                <input 
                    className="p-2 rounded-xl w-full border bg-white text-textColor"
                    type="password" 
                    name="email" 
                    placeholder="Confirm Password" 
                    value={cPassword}  
                    onChange={(e) => 
                    setCPassword(e.target.value)}
                    />
                <button type='submit' className="bg-headingColor rounded-xl text-white py-2">Register</button>
            </form>

            <p className=" text-xs border-b">Punya akun?
            <Link to={"/login"}>
              Login Here
            </Link>
            </p>

            <div className="mt-3 grid grid-cols-3 items-center text-gray-500">
                <hr className="border-gray-500"/>
                <p className="text-center text-sm">or</p>
                <hr className="border-gray-500"/>
            </div>

            <button className="bg-white border py-2 w-full rounded-lg mt-3 flex justify-center items-center text-sm">
                <FcGoogle className="text-white mr-5"/>
                Logn With Google
            </button>
        </motion.div>
        {/* End Form */}

    </div>
    </div>
    </main>
    
  )
}

export default Register