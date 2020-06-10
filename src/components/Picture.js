import React from 'react';
import testpicture from "../assets/test_image.jpg"
import { Container } from 'semantic-ui-react'


const Picture = (props) =>{
  return(
    <Container>
        <h1>Picture</h1>
        <img src={testpicture} alt="test_image"/>
    </Container>
  )
}

export default Picture