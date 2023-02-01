import React from 'react'
import style from "./footer.css"
import { Link } from 'react-router-dom'
import {GrInstagram} from 'react-icons/gr'
import {BsYoutube} from 'react-icons/bs'
import {AiFillTwitterSquare, AiFillFacebook} from 'react-icons/ai'



const date = new Date()
const year = date.getFullYear()
const Footer = () => {
  return (
    <footer>
        <div className="footer__container">

            <div className="footer__1">
                <Link to='/course' className="footer__logo">
                    <h1>PT. LSKK</h1>
                    <hr />
                    <h5>Langgeng Sejahtera Kreasi Komputasi</h5>
                </Link>
                <h4>Kantor Utama</h4>
                <p>Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263, Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40264</p>
            </div>

            <div className="footer__2">
            <h4>Kantor WorkShop</h4>
                <p>Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263,
                Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40264</p> 
            </div>

            <div className="footer__3">
            <h4>Telusuri disini</h4>
            <ul className={style.privacy}>
                <li>
                <Link to='/' className="footer__logo">
                    Beranda
                </Link>
                </li>
                <li>
                <Link to='/layanan' className="footer__logo">
                    Layanan
                </Link>
                </li>
                <li>
                <Link to='/tekido' className="footer__logo">
                    Tekido
                </Link>
                </li>
                <li>
                <Link to='/tentang' className="footer__logo">
                    Tentang Kami
                </Link>
                </li>
                <li>
                <Link to='/contact' className="footer__logo">
                    Hubungi Kami
                </Link>
                </li>
            </ul>
            </div>

            <div className="footer__4">
            <h4>Contact us</h4>
                
                <div>
                    <p>(022) 1234567</p>
                    <p>pt.lskk@gmail.com</p>
                </div>
            <ul className="footer__socials">
                <li>
                <Link to='/course'>
                    <AiFillFacebook/>
                </Link>
                </li>
                <li>
                <Link to='/course'>
                    <AiFillTwitterSquare/>
                </Link>
                </li>
                <li>
                <Link to='/course'>
                    <BsYoutube/>
                </Link>
                </li>
                <li>
                <Link to='/course'>
                    <GrInstagram/>
                </Link>
                </li>
            </ul>
            </div>
        </div>
    
      <div className="footer__copyright">  
           <small>Copyright  &copy; {year} All Right Reserved PT. LSKK</small> 
      </div>
    </footer>
  )
}

export default Footer