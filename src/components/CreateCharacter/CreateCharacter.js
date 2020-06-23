import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createCharacter } from '../../api/character'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateCharacter extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreateCharacter = event => {
    const { msgAlert, user } = this.props
    createCharacter(this.state, user)
      .then((res) => this.props.setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Create Success',
        message: messages.createProfileSuccess,
        variant: 'success'
      }))
      .catch(error => {
        this.setState({
          about: '',
          avatarUrl: '',
          quote: '',
          rank: '',
          website: ''
        })
        msgAlert({
          heading: 'Create Failed with error: ' + error.message,
          message: messages.createProfileFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { name, description } = this.state

    return (
      <div className="row sign-in-form">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Sign In to an Existing Account</h3>
          <Form onSubmit={this.onSignIn}>
            <Form.Group controlId="email">
              <Form.Label>Character Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="cname"
                value={name}
                placeholder="Enter Character Name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="password"
                value={description}
                type="password"
                placeholder="Enter Character Description"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="dark"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateCharacter)
