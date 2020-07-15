import React, {Component} from 'react';
import axios from 'axios';
import { Button, Container, Form, TextArea} from 'semantic-ui-react'
import './React.scss'

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
          <Form.Field
            id='comment'
            control={TextArea}
            rows='6'
            label='Reaction' 
            placeholder='What is your reaction to this art?' 
            value={this.state.value} 
            onChange={this.handleChange}
          />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </Container>
    )
  }
    
}

export default OReact