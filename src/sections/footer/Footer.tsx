import React from 'react'
import './footer.scss'
import { links, socials } from './data'
export const Footer = () => {
  const copyrightFooter = `
  Copyright © ${new Date().getFullYear()} zoo
`
  return (
    <footer>
      <div className="container footer__container">
        <ul className="nav__menu">
          {links.map((fLinks) => (
            <li key={fLinks.id}>
              <a href={fLinks.Link}>{fLinks.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <small> {copyrightFooter} All Rights Reserved</small>
      </div>
    </footer>
  )
}
