import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { actionType } from '../../context/reducer'
import { useStateValue } from '../../context/StateProvider'
import NotFound from '../../images/forgot.png'


const RowContainer = ({flag, data, scrollValue}) => {

    const rowContainer = useRef()

    const [items, setItems ] = useState([])

    const [{cartItems}, dispatch] = useStateValue()

    const addToCart = () => {
        
        dispatch({
            type : actionType.SET_CART_ITEMS,
            cartItems : items,
        })
        localStorage.setItem("cartItems", JSON.stringify(items))
    }

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    },[scrollValue])

    useEffect(() => {
        addToCart()
    }, [items])

  return (
    <div
        ref = {rowContainer}
        className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"
        }`}>
       {data.length > 0 ? (
       data.map((item) => (
        <div key={item?.id} 
        className="w-[300px] md:w-[320px] min-w-[300px] h-200 bg-cardOverlay 
        rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg md:min-w-[300px] flex flex-col items-center justify-between">

        <div className="w-full flex items-center justify-between">

             <motion.div 
             whileHover={{scale:1.2}}
             className="w-40 overflow-hidden h-150 -mt-8 drop-shadow-2xl">
                 <img 
                 whileHover={{scale:1.2}}
                 src={item?.imageURL}
                 alt="product" 
                 className='w-full h-full object-contain'
                 />
             </motion.div>

            <motion.div
            whileTap={{scale:0.75}}
            className="w-8 h-8 rounded-full bg-red-700 flex items-center justify-center cursor-pointer"
            onClick={() => setItems([...cartItems, item])}
            >
                <MdShoppingBasket className="text-white"/>
            </motion.div>
        </div>
        <div className="w-full flex flex-col items-end justify-end">
            <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
            </p>
            <p className="mt-1 text-sm text-gray-500">
                stok : {item?.calories}
            </p>
            <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibol">
                    <span className="text-sm text-black">Rp. </span>{item?.price}
                </p>
            </div>
        </div>
        </div>
       ))
       ):(
        <div className="w-full flex flex-col items-center justify-center">
            <img src={NotFound} alt="Not Product" className='w-[300px]'/>
            <p className='text-xl text-headingColor'>Items Belum Tersedia</p>
        </div>
       )}

    </div>
  )
}

export default RowContainer