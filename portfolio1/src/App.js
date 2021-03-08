import React from 'react';
import HomePage from './components/homepage'
import Content from "./components/content";
import ToDo from "./components/todo";
import './homepage.css';





function App() {
  const fname= 'Farah';
  return(
    <div className="App">
    <HomePage firstName= {fname} />
    <Content></Content>
    <ToDo></ToDo>
  
  </div>
  )
}

export default App;
