import React from 'react';
import { Container, Button, Form } from 'semantic-ui-react'
import './Reload.scss'
const onSubmit = (event) => {
    window.location.reload()
}

const Reload = (props) => {
  return (
      <Container>
          <Form onSubmit={onSubmit}>
            <Button size='huge' color='grey'>React to a new Image</Button>
          </Form>
      </Container>
    )

}
  

export default Reload