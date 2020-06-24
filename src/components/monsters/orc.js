import React from 'react'

import Card from 'react-bootstrap/Card'

const Orc = () => (
  <div className="row mb-3 view-characters">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://bw-1651cf0d2f737d7adeab84d339dbabd3-gallery.s3.amazonaws.com/images/image_2791122/8dbf961ed47267134e9c38381b8ecfeb_large.jpg" />
        <Card.Body>
          <Card.Title>Orc</Card.Title>
          <Card.Text>
            Orcs are savage humanoids with stooped postures, piggish faces, and prominent teeth that resemble tusks. They gather in tribes that satisfy their bloodlust by slaying any humanoids that stand against them.
          </Card.Text>
          <Card.Text>
            Hit Points: 8
          </Card.Text>
          <Card.Text>
            Attack Power: 3
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
)

export default Orc
