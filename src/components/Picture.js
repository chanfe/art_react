import React from 'react';
import testpicture from "../assets/test_image.jpg"

const Picture = (props) =>{
  return(
    <div class="container">
        <h1>Picture</h1>
        <img src={testpicture} alt="test_image"/>
    </div>
  )
}

export default Picture