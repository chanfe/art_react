import React, {Component} from 'react';
import testpicture from "../assets/test_image.jpg"
import { Container, Dimmer, Loader, Segment } from 'semantic-ui-react'
import Title from './Title';

const renderLoadingPicture = () => {
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>
    </Segment>
      
  )
}

const renderPicture = (data) => {
  return (
    <Container>
      <h1>{data.title}</h1>
      <img src={data.imageUrl} alt={data.title}/>
      <p>{data.description}</p>
      <p>by {data.creator}</p>
    </Container>
  )

}


class Picture extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }


  componentDidUpdate() {
  }

  render(){
    return (
      this.props.isPictureLoaded ? 
      renderPicture(this.props.data) 
      : renderLoadingPicture())
  }

}
  

export default Picture