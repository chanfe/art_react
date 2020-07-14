import React from 'react';
import { Container, Divider } from 'semantic-ui-react'

const Title = (props) =>{
  return(
    <Container textAlign='center'>
        <p>Images © <a href="https://www.metmuseum.org/">Harvard Art Museums</a></p>
        <p>View on <a href="https://github.com/chanfe/art_react">GitHub</a></p>
    </Container>
  )
}

export default Title
