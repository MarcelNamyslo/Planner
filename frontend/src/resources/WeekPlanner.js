// src/components/Scheduler.js
import React, { Component }  from 'react';
import './WeekPlanner.css'; // Create this CSS file for styling
import './DayBlock.css'; 
import DayBlock from './DayBlock';
import backgroundImage from './pictures/background9.png';

class WeekPlanner extends Component {



  render() {
  return (
    <div >
      
      <div className="center-image">
      <img src={backgroundImage} alt="BackgroundImage" />
      </div>
      
      <div className="scheduler">
        <div className="row">
          <DayBlock className="day-name" day="Monday" />
          <DayBlock className="day-name" day="Tuesday" />
        </div>
        <div className="row">
          <DayBlock className="day-name" day="Wednesday" />
          <DayBlock className="day-name" day="Thursday" />
        </div>
        <div className="row">
          <DayBlock className="day-name" day="Friday" />
          <DayBlock className="day-name" day="Saturday" />
        </div>
        <div className="row sunday">
          <DayBlock className="sunday" day="Sunday" />
        </div>
        {/* Add more day blocks as needed */}
      </div>
    </div>
  );
}}

export default WeekPlanner;
