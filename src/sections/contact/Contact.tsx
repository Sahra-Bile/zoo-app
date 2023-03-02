import React from 'react'
import './contact.scss'
import { data } from '../contact/contactData.js'
export const Contact = () => {
  return (
    <section id="contact">
      <div className="container about__container">
        <div className="about__right">
          <h2 className="contact">Kontakt oss</h2>

          <div className="about__cards card">
            {data.map((item) => (
              <div key={item.id} className="about__card">
                <p>{item.text}</p>
                <div className="about__portrait">
                  <img src={item.imageUrl} alt="About" />
                </div>
                <h5>
                  Mitt namn är {item.name} kontak mig så hjälper jag dig gärna!
                </h5>
                <span className="about__card-icon">
                  {item.icon1} {item.link}
                </span>
                <span className="about__card-icon">
                  {item.icon2} {item.phone}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
