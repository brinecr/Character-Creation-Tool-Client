import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createCharacter } from '../../api/character'
import messages from '../AutoDismissAlert/messages'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

class ViewCharacter extends Component {
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
    return (
      <div className="row view-characters">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <CardGroup>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRV9qLv1OHDZJAPiLr8xlODxlOpYfdL1_cDliZsWCKymxFDFuXo&usqp=CAU" />
              <Card.Body>
                <Card.Title>Character Name</Card.Title>
                <Card.Text>
                  Description:
                </Card.Text>
                <Card.Text>
                  Hit Points:
                </Card.Text>
                <Card.Text>
                  Attack Power:
                </Card.Text>
                <Card.Text>
                  Is Dead?
                </Card.Text>
                <Button
                  className="col-3"
                  variant="dark"
                  onClick={this.onBattle}>
                  Battle
                </Button>
                <Button
                  className="col-3"
                  variant="danger"
                  onClick={this.onRevive}>
                  Revive
                </Button>
                <Button
                  className="col-3"
                  variant="light"
                  onClick={this.onUpdate}>
                  Update
                </Button>
                <Button
                  className="col-3"
                  variant="danger"
                  onClick={this.onDelete}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRV9qLv1OHDZJAPiLr8xlODxlOpYfdL1_cDliZsWCKymxFDFuXo&usqp=CAU" />
              <Card.Body>
                <Card.Title>Character Name</Card.Title>
                <Card.Text>
                  Description:
                </Card.Text>
                <Card.Text>
                  Hit Points:
                </Card.Text>
                <Card.Text>
                  Attack Power:
                </Card.Text>
                <Card.Text>
                  Is Dead?
                </Card.Text>
                <Button
                  className="col-3"
                  variant="dark"
                  onClick={this.onBattle}>
                  Battle
                </Button>
                <Button
                  className="col-3"
                  variant="danger"
                  onClick={this.onRevive}>
                  Revive
                </Button>
                <Button
                  className="col-3"
                  variant="light"
                  onClick={this.onUpdate}>
                  Update
                </Button>
                <Button
                  className="col-3"
                  variant="danger"
                  onClick={this.onDelete}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    )
  }
}

export default withRouter(ViewCharacter)
