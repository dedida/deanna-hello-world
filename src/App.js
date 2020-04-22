import React from 'react';
import logo from './mushroom.svg';
import './App.css';
import ToggleComponent from './ToggleComponent'



class App extends React.Component{

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<div> 
                     <ToggleComponent text = "Wazzzzzzzz up!"/>
                </div>
      </header>
    </div>
 

  );
 }
}




export default App;
