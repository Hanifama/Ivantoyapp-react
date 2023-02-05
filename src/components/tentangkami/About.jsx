import React from 'react'
import './about.css'
import about from '../../images/SchoolFull.png'
import Team from '../timkami/Team'
const About = () => {

    return (
      <section id="about" className="py-10 text-white bg-headingColor">
        <div className="text-center mt-8">
          <h3 className="text-4xl font-semibold">
            Tentang <span className="text-cyan-600">Kami</span>
          </h3>
          <p className="text-gray-400 my-3 text-lg">PT. LSKK</p>
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div className="p-2">
              <div className="text-gray-300 my-3">
                <p className="text-justify leading-7 w-11/12 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  eos, quam vel quisquam, explicabo sit labore dignissimos optio
                  ratione quibusdam doloribus pariatur consequuntur sint.
                  Reprehenderit cupiditate possimus facere quasi voluptatem?
                </p>
               <p className="text-justify leading-7 w-11/12 mx-auto">
                Keahlian PT.LSKK dalam bidang Cyber - Pysical System (CPS),Integration ButWeen Electromechanical System,Avanced
                incrumentation and Information & Communication Technology Yaitu internet of thing, big data analytic.Pemerosesan
                & kecerdasan buatan.Portofolio Produk PT.LSKK terdiri dari produk pertahan dan sipil yang sebagian telah digunakan 
                dan disertifikasi di tingkat nasional
               </p>
               <p className="text-justify leading-7 w-11/12 mx-auto">
                  Perusahaan ini didirikan sebagai wahana untuk ikut serta dalam memajukan industri teknologi dalam negri agar dapat bersaing secara global.PT.LSKK
                  didukung oleh sdm yang berkualitas yang masing-masing memiliki pengalaman beraneka ragam didunia industri.
               </p>
                <br />
                <br />
                <a href="./src/assets/Code_a_program.pdf" download>
                  <button className="bg-btnPrimary">Download CV</button>
                </a>
              </div>
            </div>
            <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
              <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                <img
                  src={about}
                  alt=""
                  className="w-full object-cover bg-red-600 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
