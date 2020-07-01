import React, {Component} from 'react';
import defaultpicture from "../assets/Default_Image_Thumbnail.png"
import { Container, Dimmer, Loader, Segment, Image } from 'semantic-ui-react'

const renderLoadingPicture = () => {
  return (
    <Container>
      <Segment>
        <Image src={defaultpicture} fluid />
        <Dimmer active inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>
      </Segment>
    </Container>
    
      
  )
}

const renderPicture = (data) => {
  return (
    <Container>
      <h1>{data.title}</h1>
      <Image src={data.imageUrl} fluid />
      {data.description? <p>{data.description}</p>: <div></div>}
      {data.creator? <p>by {data.creator}</p>: <div></div>}
    </Container>
  )

}


const Picture = (props) => {
  return (
    props.isPictureLoaded ? 
    renderPicture(props.data) 
    : renderLoadingPicture())

}
  

export default Picture