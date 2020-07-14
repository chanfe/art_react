import React, {Component} from 'react';
import axios from 'axios';
import { Container, Form} from 'semantic-ui-react'



class OReact extends Component{

  constructor(props){
    super(props)
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) =>{
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = (event) => {
    axios.post(`http://localhost:4000/api/v1/Reaction/` + this.props.ObjectId, {reaction: this.state.value})
      .then(res => {
        this.props.handleReacted(res.data.data._id)
      })
    event.preventDefault();
  }

  render(){
    return(
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.TextArea label='Reaction' placeholder='What is your reaction to this art?' value={this.state.value} onChange={this.handleChange}/>
          <Form.Button floated='right'>Submit</Form.Button>
        </Form>
      </Container>
    )
  }
    
}

export default OReact