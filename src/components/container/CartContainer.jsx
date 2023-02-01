import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'

import { useStateValue } from '../../context/StateProvider'
import { actionType } from '../../context/reducer'
import NotFound from '../../images/forgot.png'
import {CartItem} from '../index'





const CartContainer = () => {
    const [{cartShow,cartItems, user}, dispatch] = useStateValue()
    const [flag, setFlag] = useState(1)
    const [tot, setTot] = useState(0)



    const hideCart = () => {
        dispatch({
            type : actionType.SET_CART_SHOW,
            cartShow : !cartShow
        })
    }

    useEffect(() =>{
        let totalPrice = cartItems.reduce(function (accumulator, item){
            return accumulator + item.qty * item.price;
        }, 0)
        setTot(totalPrice);
        console.log(tot);
    }, [tot, flag]);


    const clearCart = () => {
        dispatch({
            type : actionType.SET_CART_ITEMS,
            cartItems: []
        })

        localStorage.setItem("cartItems", JSON.stringify([]))
    }

  return (
    <motion.div 
    initial={{opacity : 0, x : 200}}
    animate={{opacity : 1, x : 0}}
    exit={{opacity : 0, x : 200}}
    className="fixed top-0 right-0 w-full md:w-[375px] h-screen bg-white drop-shadow-md flex flex-col z-[101]">

        <div className="w-full flex items-center justify-between p-4 cursor-pointer">

            <motion.div 
            whileTap={{scale:0.75}}
            className=""
            onClick={hideCart}
            >
                <MdOutlineKeyboardBackspace className='text-textColor text-3xl'/>
            </motion.div>
            
                <p className="text-textColor text-lg font-semibold">Cart</p>

                <motion.p 
                onClick={clearCart}
                whileTap={{scale:0.75}}
                className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md 
                transition-all cursor-pointer text-textColor text-base'>Clear <RiRefreshFill/>
                </motion.p>
        </div>

        {/* Bottom Section */}
        {cartItems && cartItems.length > 0 ? (
            <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
            {/* Cart item Section*/}
            <div className="w-full h-340 md:h-[420px] px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                {/* Cart item */}
                {cartItems && cartItems.length > 0 && 
                cartItems.map((item) => (
                    <CartItem 
                    key={item.id} 
                    item={item} 
                    setFlag={setFlag} 
                    flag={flag}
                    />
                )) }
            </div>

            {/* Cart itotal section */}
            <div className="w-full  flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
                <div className="w-full flex items-center justify-between">
                    <p className="text-gray-400 text-lg">All Total</p>
                    <p className="text-gray-400 text-lg">Rp. {tot}</p>
                </div>
                <div className="w-full flex items-center justify-between">
                    <p className="text-gray-400 text-lg">Jasa</p>
                    <p className="text-gray-400 text-lg">Rp. 250</p>
                </div>

                <div className="w-full border-b border-gray-600 my-2"></div>

                <div className="w-full flex items-center justify-between">
                    <p className="text-gray-200 text-xl font-semibold">Total</p>
                    <p className="text-gray-200 text-xl font-semibold">Rp. {tot + 250}</p>
                </div>

                {user ? (
                    <motion.button
                    whileTap={{scale : 0.8}}
                    type="button"
                    className='w-full p-2 rounded-full bg-orange-200 text-gray-50 text-lg my-2 hover:shadow-lg '
                    >
                        Check Out
                    </motion.button>
                ): (
                    <motion.button
                whileTap={{scale : 0.8}}
                type="button"
                className='w-full p-2 rounded-full bg-orange-200 text-gray-50 text-lg my-2 hover:shadow-lg '
                >
                    Login to Check Out
                </motion.button>
                )}
            </div>
            </div>
        ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                <img src={NotFound}  alt="cartnotfound" className='w-300' />
                <p className='text-xl text-textColor font-semibold'>
                    Tidak Ada Barang Dikeranjang ini
                </p>
            </div>
        )}
        

    </motion.div>
  )
}

export default CartContainer