import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import { Nav, Button } from 'react-bootstrap'

class AutoSignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: 'fighter@ofmonsters.com',
      password: 'diemonsterdie123'
    }
  }

  onSignIn = event => {
    event.preventDefault()

    const { msgAlerts, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data))
      .then(() => msgAlerts({
        heading: 'Auto Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/view-character'))
      .catch(error => {
        this.setState({ email: '', password: '' })
        msgAlerts({
          heading: 'Auto Sign In Failed with error: ' + error.message,
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <Fragment>
        <Nav.Link href="#" onClick={this.onSignIn}>
          {<Button variant="dark" size="sm" >Auto Sign In</Button>}
        </Nav.Link>
      </Fragment>
    )
  }
}

export default withRouter(AutoSignIn)
