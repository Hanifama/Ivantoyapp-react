import React from 'react'
import { Link } from 'react-router-dom'
import './team.css'
import img from '../../images/tm8.jpg'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'



const Team = () => {
  return (
    <section className="team">
        <h2>Meet Our Team</h2>

        <div className="container team__container">

            <article className="team__member">

                <div className="team__member-image">
                    <img src={img} alt="" />
                </div>

                <div className="team__member-info">
                    <h4>Udin MS</h4>
                    <p>Web Dev</p>
                </div>

                <div className="team__member-socials">
                    <Link>
                        <AiFillGithub/>
                    </Link>
                    <Link>
                        <AiFillTwitterCircle/>
                    </Link>
                    <Link>
                        <GrInstagram/>
                    </Link>
                </div>
            </article>

            <article className="team__member">

<div className="team__member-image">
    <img src={img} alt="" />
</div>

<div className="team__member-info">
    <h4>Udin MS</h4>
    <p>Web Dev</p>
</div>

<div className="team__member-socials">
                    <Link>
                        <AiFillGithub/>
                    </Link>
                    <Link>
                        <AiFillTwitterCircle/>
                    </Link>
                    <Link>
                        <GrInstagram/>
                    </Link>
                </div>
            </article>

            <article className="team__member">

            <div className="team__member-image">
                <img src={img} alt="" />
            </div>

            <div className="team__member-info">
                <h4>Udin MS</h4>
                <p>Web Dev</p>
            </div>

            <div className="team__member-socials">
                    <Link>
                        <AiFillGithub/>
                    </Link>
                    <Link>
                        <AiFillTwitterCircle/>
                    </Link>
                    <Link>
                        <GrInstagram/>
                    </Link>
                </div>
            </article>

            <article className="team__member">

            <div className="team__member-image">
                <img src={img} alt="" />
            </div>

            <div className="team__member-info">
                <h4>Udin MS</h4>
                <p>Web Dev</p>
            </div>

           
            <div className="team__member-socials">
                    <Link>
                        <AiFillGithub/>
                    </Link>
                    <Link>
                        <AiFillTwitterCircle/>
                    </Link>
                    <Link>
                        <GrInstagram/>
                    </Link>
                </div> </article>

            <article className="team__member">

            <div className="team__member-image">
                <img src={img} alt="" />
            </div>

            <div className="team__member-info">
                <h4>Udin MS</h4>
                <p>Web Dev</p>
            </div>

            <div className="team__member-socials">
                    <Link>
                        <AiFillGithub/>
                    </Link>
                    <Link>
                        <AiFillTwitterCircle/>
                    </Link>
                    <Link>
                        <GrInstagram/>
                    </Link>
            </div>
            </article>

            <article className="team__member">

            <div className="team__member-image">
                <img src={img} alt="" />
            </div>

            <div className="team__member-info">
                <h4>Udin MS</h4>
                <p>Web Dev</p>
            </div>

            <div className="team__member-socials">
                    <Link>
                        <AiFillGithub/>
                    </Link>
                    <Link>
                        <AiFillTwitterCircle/>
                    </Link>
                    <Link>
                        <GrInstagram/>
                    </Link>
            </div>
            </article>

        </div>

    </section>
  )
}

export default Team