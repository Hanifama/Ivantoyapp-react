import React from 'react'
import { cardLayanan } from '../../utils/data'
import MainHeader from '../header/MainHeader'

const Layanan = () => {
  return (
    <section>
    <MainHeader/>
    <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
    <div className="w-full bg-headingColor text-white">
      <div className="text-center py-10">
        <h5 className="text-4xl w-98 mx-auto leading-normal">Layanan</h5>
        <h1 className="font-semibold mb-12">Kami Melayani</h1>

        <div className="flex max-w-5xl mx-auto gap-8 group">

          {cardLayanan && cardLayanan.map(n => (
             <div key={n.id} className="bg-white/10 w-[25%] group-hover:blur-sm hover:!blur-none grup-hover:scale-[0.65] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
              <img src={n.imageSrc} alt="Layanan" className='h-20 mx-auto'/>
               <h4 className="uppercase tex-xl font-bold mt-2">{n.title}</h4>
                <p className='text-sm leading-7 my-3 font-light opacity-50 underline-offset-[3px]'>
                  {n.desc}
                </p>
              </div>
            ))}

        </div>
      </div>
    </div>
    </main>
    
  </section>

    
  )
}

export default Layanan
