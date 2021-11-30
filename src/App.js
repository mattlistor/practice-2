import './App.css';
import React, { useState } from 'react';

function countInitial() {
  console.log('hello')
  return 4
}

function App() {

  const [count, setCount] =  useState(countInitial())
  //first in array is current state, second in array is function that updates current state

  function decrementCount(){
    setCount(prevCount => prevCount + 1)
  }

  function incrementCount(){
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>

    </div>
  );
}

export default App;
