import React from 'react';
import './intro.css';
import bg from '../assets/image.png'
import './intro.css';
import {Link} from 'react-scroll';
import btnImg from '../assets/hireme.png'
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
        <span className="hello">Hello.</span>
        <span className="introText">I'm <span className="introName">Indra</span><br/>
        Front End Developer
        </span>
        <p className="introPara">I am good when im with you and the code too.</p>
        <Link><button className="btn"><img src={btnImg} alt="" className='btnImg'/>Hire me!</button></Link>
        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro