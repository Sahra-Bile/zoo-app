import React from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'
export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
        <li>
          <Link to="/about"> Om</Link>
        </li>
      </ul>
    </nav>
  )
}
