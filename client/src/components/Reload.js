import React from 'react';
import { Container, Form, Button } from 'semantic-ui-react'
import './Reload.scss'
const onSubmit = (event) => {
    window.location.reload()
}

const Reload = (props) => {
  return (
      <Container>
          <Form onSubmit={onSubmit}>
            <div id='button'>
              <Button size='huge' color='grey'>Discover new Art</Button>
            </div>
          </Form>
      </Container>
    )

}
  

export default Reload