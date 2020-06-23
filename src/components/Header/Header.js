import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import AutoSignIn from '../AutoSignIn/AutoSignIn'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user, msgAlert, setUser }) => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="#">
      <div>
        <img
          alt=""
          src="./icon.png"
          width="30"
          height="30"
          margin-right="10"
          className="d-inline-block align-top"
        /> Monster Fighting Simulator</div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome to the THUNDERDOME, {user.email}!</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
        { !user && <AutoSignIn msgAlerts={msgAlert} setUser={setUser} />}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
