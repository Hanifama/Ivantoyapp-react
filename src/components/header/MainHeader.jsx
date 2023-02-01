import React, { useState } from 'react'
import Logo from '../../images/burger1.png'
import {MdAdd, MdLogout, MdShoppingBasket} from 'react-icons/md'
import Avatar from "../../images/avatar.png"
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { app, auth } from '../../firebase.config'
import { useStateValue } from '../../context/StateProvider'
import { actionType } from '../../context/reducer'
import { AiOutlineCodepenCircle } from 'react-icons/ai'
import { toast } from 'react-toastify'




const MainHeader = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user, cartShow, cartItems}, dispatch] = useStateValue()

    const [isMenu, setIsMenu] = useState(false)


    const login = () => {
        setIsMenu(!isMenu)
        // if(!user){
        //     const {
        //         user : {refreshToken, providerData},
        //     } = await signInWithPopup(firebaseAuth, provider)
        //     dispatch({
        //         type : actionType.SET_USER,
        //         user : providerData[0],
        //     })
        //     localStorage.setItem('user', JSON.stringify(providerData[0]))
        // }else{
        //     setIsMenu(!isMenu)
        // }
    }
    const navigate = useNavigate();

    const Logout = () =>{
        signOut(auth).then(() => {
            toast.success("Logout Berhasi..")
            navigate("/login")
          }).catch((error) => {
           toast.error(error.message)
          });
        setIsMenu(false)
        localStorage.clear()

        dispatch({
            type : actionType.SET_USER,
            user : null
        })
    }

    const showCart = () => {
        dispatch({
                    type : actionType.SET_CART_SHOW,
                    cartShow : !cartShow
                })
    }

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary'>
        {/* Dekstop */}
        <div className="hidden md:flex w-full h-full items-center justify-between">

            <Link to={'/'} className="flex items-center gap-8">
                <AiOutlineCodepenCircle className="w-10 object-cover"/>
                <p className="text-black text-xl font-bold">PT.LSKK</p>
            </Link>

            <div className="flex items-center gap-8">
                <motion.ul 
                initial={{opacity : 0, x : 200 }}
                animate={{opacity : 1, x : 0 }}
                exit={{opacity : 0, x : 200 }}
                className="flex items-center gap-8 ">
                    <Link to={"/"}>
                    <li className="text-base text-black hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">Beranda</li>
                    </Link>
                    <Link to={"/layanan"}>
                    <li className="text-base text-black hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">Layanan</li>
                    </Link>
                    <Link to={"/tekido"}>
                    <li className="text-base text-black hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">Tekido</li>
                    </Link>
                    <Link to={"About"}>
                    <li className="text-base text-black hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">About</li>
                    </Link>
                    <Link to={"/contact"}>
                    <li className="text-base text-black hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">Contact</li>
                    </Link>
                </motion.ul>

                <div className="relative flex items-center justify-center">
                 < MdShoppingBasket className="text-black text-2xl cursor-pointer" onClick={showCart}/>
                    {cartItems && cartItems.length > 0 && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumbg flex items-center justify-center" >
                        <p className="text-xs text-white font-semibold">{cartItems.length}</p>
                    </div>
                    )}
                </div>


                <div className="relative">
                    <motion.img 
                    whileTap={{ scale : 0.6}}
                    src={user ? user.photoURL : Avatar} 
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
                    alt="Avatar" 
                    onClick={login}
                    />
                   {
                      isMenu && (
                         <motion.div 
                         initial={{opacity : 0, scale : 0.7}}
                         animate={{opacity : 1, scale : 1}}
                         exit={{opacity : 0, scale : 0.7}}
                         className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 ">
                            {
                            user && user.email === "hanifamafisial@gmail.com" &&(
                                <Link to={"/createItem"}>
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer
                                    hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">New Item <MdAdd/></p>
                                </Link>
                            )
                            }
                            <p className="px-4 py-2 flex items-center gap-3 cursor-pointer
                            hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                            onClick={Logout}
                            >Logout <MdLogout/></p>
                         </motion.div>
                      )
                   }
                </div>
               


            </div>

        </div>

      {/* Mobile */}
        <div className="flex items-center justify-between md:hidden w-full h-full">

            <div className="relative flex items-center justify-center">
                 < MdShoppingBasket className="text-black text-2xl cursor-pointer" onClick={showCart}/>
                 {cartItems && cartItems.length > 0 && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumbg flex items-center justify-center" >
                        <p className="text-xs text-white font-semibold">{cartItems.length}</p>
                    </div>
                    )}
            </div>

            <Link to={'/'} className="flex items-center gap-2">
                <AiOutlineCodepenCircle className="w-10 object-cover"/>
                <p className="text-black text-xl font-bold">PT.LSKK</p>
            </Link>

            
            <div className="relative">
                    <motion.img 
                    whileTap={{ scale : 0.6}}
                    src={user ? user.photoURL : Avatar} 
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
                    alt="Avatar" 
                    onClick={login}
                    />
                   {
                      isMenu && (
                         <motion.div 
                         initial={{opacity : 0, scale : 0.7}}
                         animate={{opacity : 1, scale : 1}}
                         exit={{opacity : 0, scale : 0.7}}
                         className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 ">
                            {
                            user && user.email === "hanifamafisial@gmail.com" &&(
                                <Link to={"/createItem"}>
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer
                                    hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">New Item <MdAdd/></p>
                                </Link>
                            )}
                            <ul className="flex flex-col">
                                <Link to={"/"}>
                                <li className="gap-8 px-4 py-2 text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer ">Beranda</li>
                                </Link>
                                <Link to={"/layanan"}>
                                <li className="gap-8 px-4 py-2 text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer ">Layanan</li>
                                </Link>
                                <Link to={"/tekido"}>
                                <li className="gap-8 px-4 py-2 text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer ">Tekido</li>
                                </Link>
                                <Link to={"About"}>
                                <li className="gap-8 px-4 py-2 text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer ">About</li>
                                </Link>
                                <Link to={"/contact"}>
                                <li className="gap-8 px-4 py-2 text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer ">Contact</li>
                                </Link>
                            </ul>

                            <p className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer
                            hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base"
                            onClick={Logout}
                            >Logout <MdLogout/></p>
                         </motion.div>
                      )
                   }
            </div>
            
            

        </div>
    </header>
  )
}

export default MainHeader