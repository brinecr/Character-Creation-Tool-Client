import React from 'react'

import Card from 'react-bootstrap/Card'

const Beholder = () => (
  <div className="row mb-3 view-characters">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/668b78c3-62bf-4859-a9fa-d702872fe780/ddm3goz-715c54ec-a48f-4fff-8b76-39815eefa765.jpg/v1/fit/w_300,h_900,q_70,strp/beholder_by_dogzillalives_ddm3goz-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDAwIiwicGF0aCI6IlwvZlwvNjY4Yjc4YzMtNjJiZi00ODU5LWE5ZmEtZDcwMjg3MmZlNzgwXC9kZG0zZ296LTcxNWM1NGVjLWE0OGYtNGZmZi04Yjc2LTM5ODE1ZWVmYTc2NS5qcGciLCJ3aWR0aCI6Ijw9MTA3MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.q9j-Zyr5jlMN5OGfzHSnU9Wlne8TQ2eRMPWOelN9mC8" />
        <Card.Body>
          <Card.Title>Beholder</Card.Title>
          <Card.Text>
            Its appearance is that of a floating orb of flesh with a large mouth, single central eye, and many smaller eyestalks on top with powerful magical abilities.
          </Card.Text>
          <Card.Text>
            Hit Points: 20
          </Card.Text>
          <Card.Text>
            Attack Power: 10
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
)

export default Beholder
