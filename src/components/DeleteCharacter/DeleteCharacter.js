import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createCharacter } from '../../api/character'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class DeleteCharacter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      description: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreateCharacter = event => {
    const { msgAlert, user } = this.props
    createCharacter(this.state, user)
      .then((res) => this.props.setUser(res.data))
      .then(() => msgAlert({
        heading: 'Create Success',
        message: messages.createCharacterSuccess,
        variant: 'success'
      }))
      .catch(error => {
        this.setState({
          name: '',
          description: ''
        })
        msgAlert({
          heading: 'Create Failed with error: ' + error.message,
          message: messages.createCharacterFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { name, description } = this.state

    return (
      <div className="row sign-in-form">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Create a New Character</h3>
          <Form onSubmit={this.onCreateCharacter}>
            <Form.Group controlId="name">
              <Form.Label>Character Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={name}
                placeholder="Enter Character Name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description/Quote</Form.Label>
              <Form.Control
                name="description"
                value={description}
                type="text"
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

export default withRouter(DeleteCharacter)
