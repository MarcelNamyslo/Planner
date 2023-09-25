// App.js
import React, { Component }  from 'react';
import WeekPlanner from './resources/WeekPlanner.js';
import Sidebar from './resources/SideBar';

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
     
    </div>
	</main>
  );
}
}
export default App;