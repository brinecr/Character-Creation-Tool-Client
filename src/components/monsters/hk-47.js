import React from 'react'

import Card from 'react-bootstrap/Card'

const HK47 = () => (
  <div className="row mb-3 view-characters">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://vignette.wikia.nocookie.net/starwars/images/3/37/HK-47.png/revision/latest/top-crop/width/360/height/450?cb=20130204122718" />
        <Card.Body>
          <Card.Title>HK-47</Card.Title>
          <Card.Text>
            A Hunter-Killer assassin droid and Jedi hunter constructed by the Dark Lord of the Sith, Darth Revan, shortly after the end of the Mandalorian Wars in 3960 BBY.
          </Card.Text>
          <Card.Text>
            Hit Points: 50
          </Card.Text>
          <Card.Text>
            Attack Power: 20
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
)

export default HK47
