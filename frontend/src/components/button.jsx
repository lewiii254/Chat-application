import React from 'react'
import { useState } from 'react'
const MyButton = ({ handleClick, count }) => {
    return (
      <div>
        <button onClick={handleClick}>You have clicked me {count} times</button>
      </div>
    );
  };
  
  export default MyButton;