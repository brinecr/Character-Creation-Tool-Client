import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { deleteCharacter, updateCharacter } from '../../api/character'
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

  onDeleteCharacter = event => {
    const { msgAlert, user } = this.props
    deleteCharacter(this.state, user)
      .then(() => msgAlert({
        heading: 'Delete Character Success!',
        message: messages.deleteCharacterSuccess,
        variant: 'success'
      }))
      .catch(error => {
        this.setState({
          name: '',
          description: ''
        })
        msgAlert({
          heading: 'Delete Failed with error: ' + error.message,
          message: messages.deleteCharacterFailure,
          variant: 'danger'
        })
      })
  }

  onReviveCharacter = event => {
    const { msgAlert, user } = this.props
    updateCharacter(this.state, user)
      .then(() => msgAlert({
        heading: 'Revive Character Success!',
        message: messages.reviveCharacterSuccess,
        variant: 'success'
      }))
      .catch(error => {
        this.setState({
          name: '',
          description: ''
        })
        msgAlert({
          heading: 'Revive Character Failed with error: ' + error.message,
          message: messages.reviveCharacterFailure,
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
                  variant="light"
                  onClick={this.onReviveCharacter}>
                  Revive
                </Button>
                <Button
                  className="col-3"
                  variant="danger"
                  onClick={this.onDeleteCharacter}>
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
