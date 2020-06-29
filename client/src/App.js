import React, { Component }  from 'react';
import axios from 'axios';

import './App.css';
import Title from './components/Title'
import Picture from './components/Picture'
import OReact from './components/React'
import ReactionsList from './components/ReactionsList'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      reacted:false,
      text:"",
      isPictureLoaded:false,
      randomdata:{
        id:"",
        title:"",
        description:"",
        creator:"",
        imageUrl:"",
        reactions:[]
      }
    }
  }

  handleReacted = (data) => {
    let reactions = this.state.randomdata.reactions
    reactions.push(data)
    this.setState({
      reacted:!this.reacted,
      randomdata:{
        ...this.state.randomdata,
        reactions:reactions
      }
    })
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/v1/Art/random`)
      .then(res => {
        const random = res.data;
        this.setState({
          isPictureLoaded:true,
          randomdata: {
            id:random.data._id,
            title:random.data.title,
            description:random.data.description,
            creator:random.data.creator,
            imageUrl:random.data.imageUrl,
            reactions:random.data.reactions
          }
        });
      })
  }

  
  
  render(){
    return (<div>
      <Title />
      <Picture data={this.state.randomdata} isPictureLoaded={this.state.isPictureLoaded}/>
      {/* once reacted turn into a reaction list */}
      {this.state.reacted ? <ReactionsList reactions={this.state.randomdata.reactions} ObjectId={this.state.randomdata.id}/> : <OReact ObjectId={this.state.randomdata.id} handleReacted={this.handleReacted}/> }

    </div>);
  }
  

}

export default App;
