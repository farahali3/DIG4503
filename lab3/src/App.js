import React from 'react';
import HomePage from './Components/homepage'
import './Components/homepage.css';


function App() {
  const fname= 'Farah';
  return(
    <HomePage firstName= {fname} />
  )
}

export default App;
