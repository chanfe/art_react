import React, { Component }  from 'react';
import axios from 'axios';

import logo from './logo.svg';
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
        title:"",
        description:"",
        creator:"",
        imageUrl:""
      }
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/v1/Art/random`)
      .then(res => {
        const random = res.data;
        this.setState({
          isPictureLoaded:true,
          randomdata: {
            title:random.data.title,
            description:random.data.description,
            creator:random.data.creator,
            imageUrl:random.data.imageUrl
          }
        });
      })
  }

  
  
  render(){
    return (<div>
      <Title />
      <Picture data={this.state.randomdata} isPictureLoaded={this.state.isPictureLoaded}/>
      {/* once reacted turn into a reaction list */}
      {this.state.reacted ? <ReactionsList /> : <OReact /> }

    </div>);
  }
  

}

export default App;
