import React from 'react'

import Card from 'react-bootstrap/Card'

const Goblin = () => (
  <div className="row mb-3 view-characters">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://cdn.animeuknews.net/app/uploads/2019/11/Goblin-Slayer-2.jpg" />
        <Card.Body>
          <Card.Title>Goblin</Card.Title>
          <Card.Text>
            Goblins are small, black-hearted humanoids that lair in despoiled dungeons and other dismal settings. Individually weak, they gather in large numbers to torment other creatures.
          </Card.Text>
          <Card.Text>
            Hit Points: 4
          </Card.Text>
          <Card.Text>
            Attack Power: 1
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
)

export default Goblin
