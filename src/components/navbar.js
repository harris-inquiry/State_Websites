import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav  } from "react-bootstrap"

const MyNavbar = () => (
    <Navbar expand="xl" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <Link className="btn btn-primary" to="/">Page1</Link>
          <Link className="btn btn-primary" to="/why_vote">Why Vote</Link>
          <Link className="btn btn-primary" to="/resources">Resources</Link>
          <Link className="btn btn-primary" to="/more-info">More Information</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)

export default MyNavbar
