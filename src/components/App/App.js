import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import CardGroup from 'react-bootstrap/CardGroup'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import CreateCharacter from '../CreateCharacter/CreateCharacter'
import ViewCharacter from '../ViewCharacter/ViewCharacter'
import UpdateCharacter from '../UpdateCharacter/UpdateCharacter'
import DeleteCharacter from '../DeleteCharacter/DeleteCharacter'

import Battle from '../Battle/Battle'

import Goblin from '../monsters/goblin'
import Orc from '../monsters/orc'
import Beholder from '../monsters/beholder'
import HK47 from '../monsters/hk-47'
import Badger from '../monsters/badger'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} msgAlert={this.msgAlert} setUser={this.setUser} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <div></div>
          )}/>
          <Route exact path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route exact path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute exact user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/create-character' render={() => (
            <CreateCharacter msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/view-character' render={() => (
            <ViewCharacter msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/update-character' render={() => (
            <UpdateCharacter msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/delete-character' render={() => (
            <DeleteCharacter msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/battle' render={() => (
            <Battle msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/monsters' component={() => (<CardGroup><Goblin/><Orc/><HK47/><Badger/><Beholder/></CardGroup>)} />
        </main>
      </Fragment>
    )
  }
}

export default App
