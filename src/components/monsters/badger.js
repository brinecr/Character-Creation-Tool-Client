import React from 'react'

import Card from 'react-bootstrap/Card'

const Badger = () => (
  <div className="row mb-3 view-characters">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/236x/39/47/31/394731d63daf2652fbf4af4b2b02b9c4--character-reference-character-design.jpg" />
        <Card.Body>
          <Card.Title>Redwall Badger</Card.Title>
          <Card.Text>
            Badgers are large beasts with long lifespans, immense strength, and a tremendous sense of honor.
          </Card.Text>
          <Card.Text>
            Hit Points: 15
          </Card.Text>
          <Card.Text>
            Attack Power: 8
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
)

export default Badger
