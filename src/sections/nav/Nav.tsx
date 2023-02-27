import React from 'react'
import { data } from './data'
import './nav.scss'

export const Nav = () => {
  return (
    <nav>
      <div className="container  nav__container">
        <a href="/" className="nav__logo">
          <img
            src="https://media.istockphoto.com/id/173681964/photo/zoo.jpg?b=1&s=170667a&w=0&k=20&c=KGbtYHpsRB5dznHXuMdWCU9s1dEfCa12vHNcnhinKC0="
            alt="logoimage"
          />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.Link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
