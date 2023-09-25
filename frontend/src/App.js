// App.js
import React, { Component }  from 'react';
import WeekPlanner from './resources/WeekPlanner.js';
import Sidebar from './resources/SideBar';
import NumberInput from './resources/NumberInput';
import './App.css'; // You can add global styles here



class App extends Component  {

constructor(props) {
	super(props);
	
	
}

render() {
	return (
		
	<main className="content">
	

    <div className="app">
      <Sidebar />
      <WeekPlanner />
      <NumberInput />
	  
    </div>
	</main>
  );
}
}
export default App;