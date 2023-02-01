import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { MdOpenInNewOff } from 'react-icons/md'
import { useStateValue } from '../../context/StateProvider'
import { categories } from '../../utils/data'
import RowContainer from './RowContainer'



const MenuContainer = () => {
    const [filter,setFilter] = useState("2")

    const [{foodItems}, dispatch] = useStateValue()


  return (
    <section className="w-full my-6 " id="menu">

        <div className="w-full flex-col items-center justify-between">
             <p className="text-2xl font-semibold capitalize text-headingColor relative
             before:absolute before:rounded-lg before:content before:w-32 before:h-1
             before:-bottom-4 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out
             duration-100">
              Teknologi Bersama Tekido
            </p>

            <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
                {categories && categories.map(category=>(
                    <motion.div 
                    whileTap={{scale : 0.6 }}
                    key={category.id} 
                    onClick = {() => setFilter(category.urlParamName)}
                    className={`"group ${filter === category.urlParamName ? 'bg-card' : 'bg-headingColor'} "w-[10rem] min-w-[94px] h-28 cursor-pointer rounded-lg 
                    drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-card"`}>
                        <div className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParamName ? 'bg-headingColor' : 'bg-cardOverlay'} group-hover:bg-headingColor flex items-center justify-center`}>
                            <MdOpenInNewOff className={`${filter === category.urlParamName ? 'text-black' : 'text-textColor'} group-hover:text-black text-lg`}/>
                        </div>
                        <p className={`text-sm ${filter === category.urlParamName ? 'text-black' : 'text-textColor'}group-hover:text-black`}>{category.name}</p>
                    </motion.div>
                ))}               
            </div>

            <div className="w-full ">
                <RowContainer flag={false} data={foodItems?.filter(n => n.category === filter)}/>
            </div>

        </div>
    </section>
  )
}

export default MenuContainer