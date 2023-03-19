import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { AiOutlineUser, AiOutlineMail} from 'react-icons/ai';
import {BsFillTelephoneFill } from 'react-icons/bs';

import { BiMinus,BiPlus } from 'react-icons/bi'


import { actionType } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';
import { storage } from '../../firebase.config';
import "../../utils/data"
import { categories } from '../../utils/data';
import { getAllOrders, saveOrder } from '../../utils/FirebaseFunctions';
import Loader from '../loader/Loader';
let items = [];








const Orders = () => {
    const [name,setName] = useState("");
    const [emailName,setEmailName] = useState("");
    const [telpon,setTelpon] = useState("");
    
    const [fields,setFields] = useState(false);
    
    const [alertStatus,setAlertStatus] = useState('danger');
    const [msg,setMsg] = useState(null);
    const [isLoading,setIsLoading] = useState(false);


    const [flag, setFlag] = useState(1)
    const [tot, setTot] = useState(0)
    const [qty, setQty] = useState(items.qty)

    const [{orderItems, cartItems}, dispatch] = useStateValue()

    
    const orderSave = () => {
        setIsLoading(true)
        try{
            if(!name|| !emailName || !telpon ||!cartItems.length){
                setFields(true);
                setMsg('request anda gagal coba lagi!!');
                setAlertStatus('danger')
                setTimeout(()=>{
                    setFields(false)
                    setIsLoading(false)
                },4000)
                
            }else{
                const order = {
                    id : `${Date.now()}`,
                    name : name,
                    emailName : emailName,
                    telpon : telpon,
                    cartItems : cartItems.length
                }
                saveOrder(order)
                setIsLoading(false)
                setFields(true)
                setMsg('Data Berhasil Disimpan');
                setAlertStatus('succes')
                clearData()
                setTimeout(()=>{
                    setFields(false)
                },4000)
            }

        }catch(error){
            console.log(error);
            setFields(true);
            setMsg('Error While uploading : try again');
            setAlertStatus('danger')
            setTimeout(()=>{
                setFields(false)
                setIsLoading(false)
            },4000)
        }

        fetchDataOrders()
    };

    const clearData = () => {
        setName("")
        setEmailName("")
        setTelpon("")
        cartItems([]);
    }

    const fetchDataOrders = async () => {
        await getAllOrders().then(data => {
         dispatch({
           type : actionType.SET_ORDERS,
           orderItems : data,
         })
        })
      }

        useEffect(() =>{
        let totalPrice = cartItems.reduce(function (accumulator, item){
            return accumulator + item.qty * item.price;
        }, 0)
        setTot(totalPrice);
        console.log(tot);
    }, [tot, flag]);

   

  return (
    <div className="w-full  min-h-screen flex items-center justify-center">

           

        <div className="w-[90%] md:w-[75%] border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
            {/* Alert */}
            {
                fields &&(
                    <motion.p 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    className={`w-full p-2 rounded-lg text-center text-lg font-semibold
                    ${alertStatus==='danger'? 'bg-red-400 text-red-800': 'bg-emerald-400 text-emerald-800'}`}>
                     {msg}
                    </motion.p>
                 )
            }

            {cartItems && cartItems.length > 0 && 
                cartItems.map((item) => (
                    <div  className="w-[250px] p-1 px-2 rounded-lg bg-headingColor flex items-center gap-2">
                    <img 
                    className='w-20 h-20 max-w-[60px] rounded-full object-contain'
                    src={item?.imageURL}
                    alt="Itemphot" />

                    {/* Name Section */}
                    <div className="flex flex-col gap-2">
                        <p className="text-base text-gray-50">
                            {item?.title}
                        </p>
                        <p className="text-sm block text-gray-300 font-semibold">Rp. {item?.price}</p>
                    </div>

                    {/* button section */}
                    <div className="group flex items-center gap-2 ml-auto cursor-pointer">

                        <p className="w-5 h-5 rounded-sm text-gray-300 flex items-center justify-center">
                            {item?.qty}
                        </p>

                    </div>
          
                    </div>
                )) }

            {/* Cart itotal section */}
            <div className="w-full  flex-1 bg-blue-50 rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">

                    {cartItems && cartItems.length > 0 && 
                    cartItems.map((item) => (

                            <div key={item?.id} className="w-full flex items-center justify-between">

                                <label 
                                className="text-red-400 items-center text-lg p-1"
                                >{item.title}</label>

                                <label 
                                className="text-red-400 items-center text-lg p-1"
                                >{item.price}</label>
                               
                               <label
                               className="text-red-400 items-center text-lg p-1"
                               >{item.qty}</label>

                               <label
                               className="text-red-400 items-center text-lg p-1"
                               >{item.qty * item?.price}</label>

                            </div>
                
                    

                    ))
                   }
                <div className="w-full border-b border-gray-600 my-2"></div>


                <div className="w-full flex items-center justify-between">
                    <p className="text-gray-500 text-lg">Sub Total</p>
                    <p className="text-gray-500 text-lg">Rp. {tot}</p>
                </div>

                <div className="w-full flex items-center justify-between">
                    <p className="text-gray-500 text-lg">Discount</p>
                    <p className="text-gray-500 text-lg">20%</p>
                </div>

                <div className="w-full border-b border-gray-600 my-2"></div>

                <div className="w-full flex items-center justify-between">
                    <p className="text-gray-700 text-xl font-semibold">Total</p>
                    <p className="text-gray-700 text-xl font-semibold">Rp{tot * (20 / 100)}</p>
                </div>

            </div>
            

            {/* Input Beri Nama */}
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                <AiOutlineUser className="text-xl text-gray-700"/>
                <input 
                type="text" 
                required 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                placeholder="Nama Anda" 
                className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none 
                placeholer:text-gray-400 text-textColor"/>
            </div>

         {/* input Email Orders */}
            <div className="w-full flex flex-col md:flex-row items-center gap-3">
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <AiOutlineMail className="text-gray-700 text-2xl"/>
                    <input type="email" 
                    required 
                    value={emailName}
                    onChange={(e) => setEmailName(e.target.value) } 
                    placeholder="Email Anda" 
                    className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"/>
                </div>
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <BsFillTelephoneFill className="text-gray-700 text-2xl"/>
                    <input type="text" 
                    required 
                    value={telpon}
                    onChange={(e) => setTelpon(e.target.value) }   
                    placeholder="Telpon" 
                    className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"/>
                </div>
            </div>

            {/* button submit */}
             <div className="flex items-center w-full">
                <button type="button" 
                className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none
                 bg-emerald-500 px-2 py-2 rounded-lg text-lg text-white font-semibold"
                onClick={orderSave}
                >
                    Order
                </button>
            </div>               




        </div>
    </div>
  )
}

export default Orders