import React from 'react'
import './about.scss'
import '../../style/container.scss'

import { data } from './contactData.js'

export const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__right"></div>
          <h2>About Us</h2>
          <p>
            In the fall of 2023, we will go on our first LIA period, learning on
            the job to develop ourselves and expand our knowledge through
            practice. My name is Sahra Bile and I am currently studying the
            first year of web development in e-commerce. It is a very
            interesting education and I look forward to use my knowledge in the
            workplace.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi ea
            provident sed vero perferendis eligendi vitae veniam expedita,
            laboriosam, sequi, velit corporis dicta enim eaque iure.
            Necessitatibus earum nesciunt hic!
          </p>
        </div>
        <div className="about__cards">
          {data.map((item) => (
            <div key={item.id} className="about__card">
              <p>{item.text}</p>
              <div className="about__portrait">
                <img src={item.imageUrl} alt="About" />
              </div>

              <h5>
                Mitt namn är {item.name} kontak mig så hjälper jag dig gärna!
              </h5>
              <p>
                {item.icon1}
                {item.link}
              </p>
              <p>
                {item.icon2}
                {item.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
