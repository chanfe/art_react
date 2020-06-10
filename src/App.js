import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Picture from './components/Picture'
import OReact from './components/React'
import ReactionsList from './components/ReactionsList'

function App() {
  return (
    <div>
      <Title />
      <Picture />
      <OReact />
      <ReactionsList />
    </div>
  );
}

export default App;
