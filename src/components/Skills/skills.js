import React from 'react';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import './skills.css'
const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra tortor vitae ultrices rutrum. Integer eleifend, erat id egestas tincidunt, libero neque cursus ligula</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Never gonna give you up never gonna let u down</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>Never gonna give you up never gonna let u down</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Never gonna give you up never gonna let u down</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills