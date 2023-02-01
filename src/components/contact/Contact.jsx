import React from 'react'
import contact from '../../images/contact.svg'
import './contact.css'
import { Link } from 'react-router-dom'
import {AiOutlineMail} from 'react-icons/ai'
import {SiMinutemailer} from 'react-icons/si'
import {MdOutlineContactPhone} from 'react-icons/md'
import {GrInstagram} from 'react-icons/gr'
import {BsYoutube} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'


const Cperson = () => {
  return (
    <section className="contact">

        <div className="container contact__container">

            <aside className="contact__aside">

                <div className="aside__image">
                    <img src={contact} alt="contactperson" />
                </div>

                <h2>Contact Us</h2>
                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt sapiente et. Laboriosam beatae facere natus maiores laudantium sed eveniet repellat consequatur, sit itaque delectus aliquid dolorem repudiandae ipsa! Tempora.
                </p>
                
                <ul className="contact__details">
                    <li>
                        <MdOutlineContactPhone/>
                        <h5>0812345678910</h5>
                    </li>
                    <li>
                        <AiOutlineMail/>
                        <h5>ClassPPTIK@gmail.com</h5>
                    </li>
                    <li>
                        <SiMinutemailer/>
                        <h5>12345687424</h5>
                    </li>
                </ul>

                <ul className="contact__socials">
                    <li>
                    <Link to='/course' className='a'>
                        <AiFillFacebook/>
                    </Link>
                    </li>
                    <li>
                    <Link to='/course' className='a'>
                        <AiFillTwitterSquare/>
                    </Link>
                    </li>
                    <li>
                    <Link to='/course' className='a'>
                        <BsYoutube/>
                    </Link>
                    </li>
                    <li>
                    <Link to='/course' className='a'>
                        <GrInstagram/>
                    </Link>
                    </li>
                </ul>

            </aside>
            
            <form action="https://formspree.io/f/mgeqrvbp" method="post" className="contact__form">
                <div className="form__name">
                    <input type="text" name="First Name" placeholder="First Name" required/>
                    <input type="text" name="Last Name" placeholder="Last Name" required/>
                </div>
                <input type="email" name="Email Address" placeholder="Email you" required/>
                <textarea name="Message" rows="7" placeholder="Message" required></textarea>
                <button type="submit" class="btn btn-primary">send</button>
            </form>

        </div> 

    </section>
  )
}

export default Cperson