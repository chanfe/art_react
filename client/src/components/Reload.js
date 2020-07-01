import React from 'react';
import { Container, Button, Form } from 'semantic-ui-react'

const onSubmit = (event) => {
    window.location.reload()
}

const Reload = (props) => {
  return (
      <Container>
          <Form onSubmit={onSubmit}>
            <Button fluid>React to a new Image</Button>
          </Form>
      </Container>
    )

}
  

export default Reload