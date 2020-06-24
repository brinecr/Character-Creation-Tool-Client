import React from 'react'

import Card from 'react-bootstrap/Card'

const Sandworm = () => (
  <div className="row mb-3 view-characters">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://2.bp.blogspot.com/-KESwoE4cLdc/W2vm7UPfJLI/AAAAAAAA_T4/kRO8_TYqt1IzR9b7iEz9mQot0W4Qbpj8gCK4BGAYYCw/s1600/picture-723767.jpg" />
        <Card.Body>
          <Card.Title>Sandworm</Card.Title>
          <Card.Text>
            Sandworms lived beneath the sand. Attracted to rhythmic vibrations on the surface, they would breach in pursuit of the origin of such vibrations. This was an effort to defend their territory, of which they were highly protective. Thus to see a worm, and live to tell about it, was extremely rare, save for the mysterious fremen, who had achieved some kind of mastery over the beast.
          </Card.Text>
          <Card.Text>
            Hit Points: 400000
          </Card.Text>
          <Card.Text>
            Attack Power: 1000
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
)

export default Sandworm
