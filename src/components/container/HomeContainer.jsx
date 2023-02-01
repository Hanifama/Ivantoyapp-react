import React from 'react'
import { heroData } from '../../utils/data'


const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full bg-blue-50' id='home'>

        <div className='py-2 ml-[15px] flex-1 flex flex-col items-start justify-center gap-6'>

            <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                <p className='text-base text-orange-500 font-semibold'>Hi,Everyone Kami siap mendampangi 
                <span className='text-headingColor m-2'>Teknologi </span>anda</p>  
            </div>

            <p className='text-[2.5rem] md:text-[3rem] font-bold tracking-wide text-headingColor'>
                PT. Langgeng Sejahtra Kreasi Komputasi
            </p>

            <p className='text-base text-textColor text-center lg:text-left md:w-[80%]'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis omnis deserunt cumque, quasi nesciunt exercitationem 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nesciunt?
            </p>

            <button type='button' 
            className='bg-gradient-to-br from-headingColor to-headingColor w-full px-4 py-2 md:w-auto 
            flex rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>
                Order Now
            </button>

        </div>

            <div className='py-2 flex-1 flex md:w-auto items-center md:items-center relative ml-auto h-420 w-full lg:w-auto lg:h-650'>

                        {heroData && heroData.map(n => (
                            <div key={n.id} 
                            className="w-[390px] min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl 
                            flex flex-col items-center justify-center drop-shadow-lg mr-[150px] hover:bg-slate-100 
                            transition-all ease-in-out duration-100">
                                <img src={n.imageSrc} alt="Tekido Bg" className='w-70 -mt-20'/>
                                <p className="text-xl font-semibold text-textColor mt-4">{n.name}</p>

                                <p className="text-sm text-lighttextGray font-semibolf">{n.descp}</p>

                                <p className="text-sm font-semibold text-headingColor"><span className="text-xs text-red-600"> Rp. </span>{n.price}</p>
                            </div>
                        
                        ))}
                        
                
                
            </div>
    </section>
  )
}

export default HomeContainer