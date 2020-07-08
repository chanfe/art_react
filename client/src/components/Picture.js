import React, {Component} from 'react';
import defaultpicture from "../assets/Default_Image_Thumbnail.png"
import './Picture.scss'

import { Container, Dimmer, Loader, Segment, Image} from 'semantic-ui-react'

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
      <br />

      <img id="picture" src={data.imageUrl} alt={data.title} />
      <br />
      <br />
      <br />
      {data.description? <p>{data.description}</p>: <div></div>}
      {data.creator? <p>by {data.creator}</p>: <div></div>}
    </Container>
  )

}


class Picture extends Component{
  constructor(props){
    super(props)
    this.state = {

    };
  }

  render(){
    return (
    this.props.isPictureLoaded ? 
    renderPicture(this.props.data) 
    : renderLoadingPicture())
  }

}
  

export default Picture