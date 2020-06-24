import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { deleteCharacter, healCharacter, getCharacters } from '../../api/character'
import messages from '../AutoDismissAlert/messages'

import Goblin from '../monsters/goblin'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

class Battle extends Component {
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
    console.log(event.target)
    console.log(description)
    console.log(name)
    healCharacter(id, user, name, description)
      .then(() => msgAlert({
        heading: 'Revive Character Success!',
        message: messages.reviveCharacterSuccess,
        variant: 'success'
      }))
      .then(() => this.componentDidMount())
      .catch(error => {
        msgAlert({
          heading: 'Revive Character Failed with error: ' + error.message,
          message: messages.reviveCharacterFailure,
          variant: 'danger'
        })
      })
  }

  componentDidMount () {
    getCharacters(this.props.user)
      .then(res => {
        console.log(res)
        this.setState({ characters: res.data })
      })
      .catch(console.error)
  }

  render () {
    const { characters } = this.state
    return (
      <div className="row view-characters">
        <div>
          <CardDeck>
            {characters.map(character => (
              <Card className="mt-5" key={character.id} style={{ width: '20rem' }}>
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
                </Card.Body>
              </Card>
            ))}
            <Card className= "h-100 ml-2 mt-5" style={{ width: '15rem' }}>
              <Card.Img src="https://image.freepik.com/free-vector/versus-vs-logo-battle-headline-template-sparkling-lightning-design_159025-56.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Button
                  className="col-6"
                  variant="dark"
                  id={characters.id}
                  name={characters.name}
                  data={characters.description}
                  onClick={this.onHealCharacter}>
                  Attack
                </Button>
                <Button
                  className="col-6"
                  variant="danger"
                  id={characters.id}
                  name={characters.name}
                  data={characters.description}
                  onClick={this.onHealCharacter}>
                  Give Up
                </Button>
              </Card.ImgOverlay>
            </Card>
            <Goblin/>
          </CardDeck>
        </div>
      </div>
    )
  }
}

export default withRouter(Battle)
