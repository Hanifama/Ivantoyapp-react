import React, { useState } from 'react'
import loginImg from '../../images/login.png'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase.config'
import Loader from '../loader/Loader'
import { icons } from 'react-icons'




const Login = () => {
 
    const [type, setType] = useState('password')
    const [icon, setIcon] = useState(FaEyeSlash)

    const handleToogle =()=>{
      if(type === 'password'){
        setIcon(FaEye)
        setType('text')
      }else{
        setIcon(FaEyeSlash)
        setType('password')
      }
    }
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [isLoader, setIsLoader] = useState(false)

    const navigate = useNavigate()

    const loginUser = (e) => {
        e.preventDefault();
        if (password !== email){
          toast.error("Harap masukan password valid")
        }
        setIsLoader(true)
    
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          // const user = userCredential.user;
          // console.log(user);
          setIsLoader(false)
          toast.success("selamat login berhasil...")
          navigate("/")
          // ...
        })
        .catch((error) => {
          setIsLoader(false)
          toast.error(error.message)
        }); 
      }
      
      const provider = new GoogleAuthProvider();
      const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          // const user = result.user;
          toast.success("Login Berhasil")
          navigate("/")
        }).catch((error) => {
          toast.error(error.message)
        });
    
      }
  return (
    <>
    {isLoader && <Loader/>}
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
                <h2 className="font-bold text-2xl text-textColor">Login</h2>
                <p className="text-sm mt-4">Tekido Siap Membantu Anda</p>

                <form onSubmit={loginUser} className="flex flex-col gap-4">
                    <input 
                    className="p-2 mt-8 rounded-xl border bg-white text-textColor"
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                    <div className="relative">
                        <input 
                        className="p-2 rounded-xl w-full border bg-white text-textColor"
                        type={type} 
                        name="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <FaEye icon={icon} onClick={handleToogle} className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"/>

                    </div>
                    <Link to={"/reset"}>
                    <p className=" text-xs">Lupa Password?</p>
                    </Link>
                    
                    <button type='submit' className="bg-headingColor rounded-xl text-white py-2">Login</button>
                </form>

                <p className=" text-xs border-b">Gapunya Akun?
                <Link to={"/register"}>
                  Register Here
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
    </>
  )
}

export default Login