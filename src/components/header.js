import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"
import { Collapse, Col, Row } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import style from "../styles/header.module.scss"

const Header = ({ siteTitle }) => {

  const [isMenuOpen, menuOpen] = useState(false)

  return (
    <header className={`${isMenuOpen ? style.isOpen : ""}`} >
      <div className={style.title}>Vote2020</div>
      <button onClick={() => menuOpen(!isMenuOpen)} className={style.btnHamburger}>
        <FontAwesomeIcon icon={faBars} style={{color:"white", fontSize:"2rem"}} />
      </button>
      <Collapse in={isMenuOpen}>
        <div className={`row ${style.headerContainer}`}>
          <Col sm>
            <Link to="/" className={`nav-link ${style.navLink}`}>Home</Link>
            <Link to="/Issues" className={`nav-link ${style.navLink}`}>On the Issues</Link>
            <Link to="/resources" className={`nav-link ${style.navLink}`}>Get Involved</Link>
          </Col>
          <Col sm>
            <Link to="/register" className={`nav-link ${style.navLink}`}>Register to Vote</Link>
            <Link to="/AbsenteeVoting" className={`nav-link ${style.navLink}`}>Absentee Voting</Link>
            <Link to="/EarlyVoting" className={`nav-link ${style.navLink}`}>Early Voting</Link>
          </Col>
        </div>
      </Collapse>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
