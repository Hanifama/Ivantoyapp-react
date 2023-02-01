import React from 'react'
import './about.css'
import about from '../../images/SchoolFull.png'
import Team from '../timkami/Team'
const About = () => {

  return (
    <section id='about'>
        <div className="about container">

          <div className="col-left">
            <div className="about-img">
            <img src={about} alt="img" />
            </div>
          </div>

          <div className="col-right">
            <h1 className="section-title">Tentang<span> Kami</span></h1>
            <h2>PT. LSKK</h2>
            <p>PT. Langgeng Sejahtra Kreasi Komputasi (LSKK) Merupakan Perusahaan 
              yang berlokasi di Bandung yang didirikan pada tahun 2016.
              Berawal dari sebuah grup yang dimulai pada tahun 2008 sebagai software industri product teknologi
            </p>
            <p> Keahlian PT.LSKK dalam bidang Cyber - Pysical System (CPS),Integration ButWeen Electromechanical System,Avanced
              incrumentation and Information & Communication Technology Yaitu internet of thing, big data analytic.Pemerosesan
              & kecerdasan buatan.Portofolio Produk PT.LSKK terdiri dari produk pertahan dan sipil yang sebagian telah digunakan 
              dan disertifikasi di tingkat nasional
            </p>
            <p>Perusahaan ini didirikan sebagai wahana untuk ikut serta dalam memajukan industri teknologi dalam negri agar dapat bersaing secara global.PT.LSKK
              didukung oleh sdm yang berkualitas yang masing-masing memiliki pengalaman beraneka ragam didunia industri.
            </p>
          </div>

        </div>
        <Team/>
    </section>
  )
}

export default About