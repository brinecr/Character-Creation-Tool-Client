import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { deleteCharacter, healCharacter, hurtCharacter, killCharacter, getCharacters } from '../../api/character'
import messages from '../AutoDismissAlert/messages'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

class ViewCharacter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      characters: []
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  routeChange = event => {
    const { history } = this.props
    history.push('/battle')
  }

  onDeleteCharacter = event => {
    const { msgAlert, user } = this.props
    const id = event.target.id
    deleteCharacter(id, user)
      .then(() => msgAlert({
        heading: 'Delete Character Success!',
        message: messages.deleteCharacterSuccess,
        variant: 'success'
      }))
      .then(() => this.componentDidMount())
      .catch(error => {
        msgAlert({
          heading: 'Delete Failed with error: ' + error.message,
          message: messages.deleteCharacterFailure,
          variant: 'danger'
        })
      })
  }

  onHealCharacter = event => {
    const { msgAlert, user } = this.props
    const id = event.target.id
    const description = event.target.getAttribute('data')
    const name = event.target.name
    healCharacter(id, user, name, description)
      .then(() => msgAlert({
        heading: 'Heal Character Success!',
        message: messages.reviveCharacterSuccess,
        variant: 'success'
      }))
      .then(() => this.componentDidMount())
      .catch(error => {
        msgAlert({
          heading: 'Heal Character Failed with error: ' + error.message,
          message: messages.reviveCharacterFailure,
          variant: 'danger'
        })
      })
  }

  onHurtCharacter = event => {
    const { msgAlert, user } = this.props
    const id = event.target.id
    const description = event.target.getAttribute('data')
    const name = event.target.name
    hurtCharacter(id, user, name, description)
      .then(() => msgAlert({
        heading: 'Hurt Character Success!',
        message: messages.hurtCharacterSuccess,
        variant: 'success'
      }))
      .then(() => this.componentDidMount())
      .catch(error => {
        msgAlert({
          heading: 'Hurt Character Failed with error: ' + error.message,
          message: messages.hurtCharacterFailure,
          variant: 'danger'
        })
      })
  }

  onKillCharacter = event => {
    const { msgAlert, user } = this.props
    const id = event.target.id
    const description = event.target.getAttribute('data')
    const name = event.target.name
    killCharacter(id, user, name, description)
      .then(() => msgAlert({
        heading: 'Kill Character Success!',
        message: messages.killCharacterSuccess,
        variant: 'success'
      }))
      .then(() => this.componentDidMount())
      .catch(error => {
        msgAlert({
          heading: 'Kill Character Failed with error: ' + error.message,
          message: messages.killCharacterFailure,
          variant: 'danger'
        })
      })
  }

  componentDidMount () {
    const { msgAlert } = this.props
    getCharacters(this.props.user)
      .then(res => {
        this.setState({ characters: res.data })
      })
      // .then(() => msgAlert({
      //   heading: 'View Characters Success!',
      //   message: messages.viewCharacterSuccess,
      //   variant: 'info'
      // }))
      .catch(error => {
        msgAlert({
          heading: 'View Characters Failed with error: ' + error.message,
          message: messages.viewCharacterFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { characters } = this.state
    return (
      <div className="row view-characters">
        <div className="mx-auto mt-5">
          <CardDeck>
            {characters.map(character => (
              <Card key={character.id} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRV9qLv1OHDZJAPiLr8xlODxlOpYfdL1_cDliZsWCKymxFDFuXo&usqp=CAU" />
                <Card.Body>
                  <Card.Title><h3>{character.name}</h3></Card.Title>
                  <Card.Text>
                    Description: {character.description}
                  </Card.Text>
                  <Card.Text>
                    Hit Points: {character.hit_points}
                  </Card.Text>
                  <Card.Text>
                    Attack Power: {character.attack_power}
                  </Card.Text>
                  <Card.Text>
                    {character.dead ? 'Dead' : 'Not Dead'}
                  </Card.Text>
                  <Card.Text>
                    Monsters Killed: {character.monsters_killed}
                  </Card.Text>
                  {character.dead
                    ? <Button
                      className="col-4"
                      variant="light"
                      id={character.id}
                      name={character.name}
                      data={character.description}
                      onClick={this.onHealCharacter}>
                      Heal
                    </Button>
                    : <Button
                      className="col-4"
                      variant="dark"
                      id={character.id}
                      name={character.name}
                      data={character.description}
                      onClick={this.onKillCharacter}>
                      Kill
                    </Button>
                  }
                  <Button
                    className="col-4"
                    id={character.id}
                    variant="danger"
                    onClick={this.onDeleteCharacter}>
                    Delete
                  </Button>

                </Card.Body>
              </Card>
            ))}
          </CardDeck>
        </div>
      </div>
    )
  }
}

export default withRouter(ViewCharacter)
