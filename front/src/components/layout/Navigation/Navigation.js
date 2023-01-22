import React from 'react'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation = () => (
  <nav className="fd-left-nav">
    <ul>
      <li>
        <NavLink to="/">
          <FontAwesomeIcon icon="home" className="fa" />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/trips">
          <FontAwesomeIcon icon="fish" className="fa" />
          All Trips
        </NavLink>
      </li>
      <li>
        <NavLink to="sign-in">
          <FontAwesomeIcon icon="sign-in" className="fa" />
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink to="sign-up">
          <FontAwesomeIcon icon="user-plus" className="fa" />
          Sign Up
        </NavLink>
      </li>
      <li>
        <a href="/">
          <FontAwesomeIcon icon="eject" className="fa" />
          Sign Out
        </a>
      </li>
    </ul>
  </nav>
)

export default Navigation
