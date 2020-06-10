import React from 'react';
import { Container, Form, TextArea } from 'semantic-ui-react'

const OReact = (props) =>{
  return(
    <Container>
        <Form>
          <Form.TextArea label='Reaction' placeholder='What is your reaction to this art?'/>
          <Form.Button>Submit</Form.Button>
        </Form>
    </Container>
  )
}

export default OReact