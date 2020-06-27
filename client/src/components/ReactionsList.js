import React from 'react';
import { Container, List, Image } from 'semantic-ui-react'
import ListItems from './ReactionsListItem'

const ReactionsList = (props) =>{
  const apes = [
    "hi test",
    "nothing",
    "last thing"
  ]

  //fetch all here

  const eachTest = apes.map(text => {
    return <ListItems text={text}/>
  })
  return(
    <Container>
        <List celled>
          {eachTest}

        </List>
    </Container>
  )
}

export default ReactionsList