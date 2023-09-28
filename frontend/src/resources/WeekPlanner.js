// src/components/Scheduler.js
import React, { Component }  from 'react';
import './WeekPlanner.css'; // Create this CSS file for styling
import './DayBlock.css'; 
import DayBlock from './DayBlock';
import backgroundImage from './pictures/background9.png';
import WeatherTimeComponent from './WeatherTimeComponent.js';

class WeekPlanner extends Component {



  render() {
  return (
    <div >
      
      <div className="center-image">
      <img src={backgroundImage} alt="BackgroundImage" />
      </div>
      <div>
      <WeatherTimeComponent/>
      </div>
      
      <div className="scheduler">
        <div className="row">
          <DayBlock className="day-name" day="Monday" empty="true"/>
          <DayBlock className="day-name" day="Tuesday"  empty="true"/>
        </div>
        <div className="row">
          <DayBlock className="day-name" day="Wednesday" empty="true"/>
          <DayBlock className="day-name" day="Thursday" empty="true"/>
        </div>
        <div className="row">
          <DayBlock className="day-name" day="Friday" empty="true"/>
          <DayBlock className="day-name" day="Saturday" empty="true"/>
        </div>
        <div className="row sunday">
          <DayBlock className="sunday" day="Sunday" empty="true"/>
        </div>
        {/* Add more day blocks as needed */}
      </div>
      <div class="arrows">

      
      <div class="arrow1">
      <div class="arrow-top1"></div>
      <div class="arrow-bottom1"></div>
      </div> 

      <div class="arrow2">
      <div class="arrow-top2"></div>
      <div class="arrow-bottom2"></div>
      </div>
      </div>
    </div>
  );
}}

export default WeekPlanner;
