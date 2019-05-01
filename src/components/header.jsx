import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import style from './header.module.scss'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <ul>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/music/">Music</ListLink>
      <ListLink to="/math_engineering/">Math & Engineering</ListLink>
      <ListLink to="/philosophy/">Philosophy</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/about/">About</ListLink>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
