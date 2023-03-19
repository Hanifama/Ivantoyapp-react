import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useStateValue } from '../../context/StateProvider'
import MainHeader from '../header/MainHeader'
import CartContainer from './CartContainer'
import HomeContainer from './HomeContainer'
import MenuContainer from './MenuContainer'
import RowContainer from './RowContainer'



const MainContainer = () => {
  const [{foodItems, cartShow}, dispatch] = useStateValue()

  const[scrollValue, setScrollValue] = useState(0)

  useEffect(() => {},[scrollValue, cartShow])


  return (
    <section>
      <MainHeader/>
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <div className='w-full h-auto flex flex-col items-center justify-center '> 
            
            <HomeContainer/>
            {/* MainContainer */}

            <section className="w-full my-6">
              <div className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold capitalize text-headingColor relative
                before:absolute before:rounded-lg before:content before:w-32 before:h-1
                before:-bottom-4 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out
                duration-100">
                  Smart System Kita Bersama
                </p>

                {/* Icons geser */}
                <div className="hidden md:flex gap-3 items-center">

                  {/* geser kiri */}
                  <motion.div 
                  whileTap={{scale:0.75}}
                  className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer flex items-center
                  hover:shadow-lg  justify-center"
                  onClick={() => setScrollValue(-200)}
                  >
                    <MdChevronLeft className="text-lg text-white"/>
                  </motion.div>

                  {/* geser kanan */}
                  <motion.div 
                  whileTap={{scale:0.75}}
                  className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer flex items-center
                  hover:shadow-lg  justify-center"
                  onClick={() => setScrollValue(200)}
                  >
                    <MdChevronRight className="text-lg text-white"/>
                  </motion.div>

                </div>        
              </div>


                <RowContainer 
                scrollValue = {scrollValue}
                flag={true} 
                data={foodItems?.filter(n=>n.category === "IOT Alat Peraga")}/>
            </section>

            <MenuContainer/>

            {cartShow && (
              <CartContainer/>
            )}
        </div>
      </main>
      
    </section>
    
  )
}

export default MainContainer