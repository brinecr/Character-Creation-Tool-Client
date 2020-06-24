import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import AutoSignIn from '../AutoSignIn/AutoSignIn'
import Button from 'react-bootstrap/Button'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#create-character">{<Button variant="success" size="sm">Create Character</Button>}</Nav.Link>
    <Nav.Link href="#view-character">{<Button variant="secondary" size="sm" >Your Characters</Button>}</Nav.Link>
    <Nav.Link href="#monsters">{<Button variant="danger" size="sm" >Monsters</Button>}</Nav.Link>
    <Nav.Link href="#change-password">{<Button variant="dark" size="sm" >Change Password</Button>}</Nav.Link>
    <Nav.Link href="#sign-out">{<Button variant="dark" size="sm" >Sign Out</Button>}</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">{<Button variant="dark" size="sm" >Sign Up</Button>}</Nav.Link>
    <Nav.Link href="#sign-in">{<Button variant="dark" size="sm" >Sign In</Button>}</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">{<Button variant="dark" size="sm" >Home</Button>}</Nav.Link>
  </Fragment>
)

const Header = ({ user, msgAlert, setUser }) => (
  <Navbar className="navBar" bg="dark" variant="dark" expand="md">
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
        <Nav.Link>{ user && <span className="navbar-text mr-2">Welcome to the THUNDERDOME, {user.email}!</span>}</Nav.Link>
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
        { !user && <AutoSignIn msgAlerts={msgAlert} setUser={setUser} />}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
