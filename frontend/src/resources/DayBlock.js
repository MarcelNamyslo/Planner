// src/components/DayBlock.js
import './DayBlock.css';
import TimeEntryForm from './TimeEntryForm';
import React, { Component } from 'react';
import axios from 'axios';

class DayBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      day: this.props.day,
      selectedItemIndex: -1, // Initialize with -1 to indicate no selected item
      activeItem: {
        completed: false,
        time: "",
        name: "",
        day: "",
        
      },
      tasklist: [
        
      ],
      thisdaystasklist: [

      ]
    };
  }

 

  handleCheckboxChange = (index) => {
    const updatedItems = [...this.state.tasklist];
    updatedItems[index].checked = !updatedItems[index].checked;
    this.setState({ tasklist: updatedItems });
  };

  handleMouseEnter = (index) => {
    const updatedItems = [...this.state.tasklist];
    updatedItems[index].showButton = true;
    this.setState({ tasklist: updatedItems });
  };

  handleMouseLeave = (index) => {
    const updatedItems = [...this.state.tasklist];
    updatedItems[index].showButton = false;
    this.setState({ tasklist: updatedItems });
  };

  toggleForm = (index) => {
    this.setState({ selectedItemIndex: this.state.selectedItemIndex === index ? -1 : index });
  };

  closeForm = () => {
    this.setState({ selectedItemIndex: -1 });
  };
  toggle = () => {
    //add this after modal creation
    this.setState({ modal: !this.state.modal });
  };

  componentDidMount() {
    this.refreshList();
  }

  // Submit an item
handleSubmit = (item) => {
  item.day = this.state.day
	this.toggle();
  console.log("11111111111")
	alert("save" + JSON.stringify(item));
  console.log("222222222222")
  
  console.log("222222222222")
	if (item.id) {
	// if old post to edit and submit
	axios
		.put(`http://localhost:8000/api/tasks/${item.id}/`, item)
		.then((res) => this.refreshList());
    console.log("333333333333333322")
	return;
  
	}
	// if new post to submit
  console.log("44444444444444")
	axios
	.post("http://localhost:8000/api/tasks/", item)
  
	.then((res) => {
    // Add the 'showButton' property to the new item
    item.showButton = false;
    this.refreshList();});
};

refreshList = () => {
	axios //Axios to send and receive HTTP requests
	.get("http://localhost:8000/api/tasks/")
	.then(res => {
    // Assuming res.data is an array of todo items with a 'day' property
    const allTasks = res.data;

    // Filter the tasks to get only those with 'day' equal to 'Monday'
    const dayTasks = allTasks.filter(task => task.day === this.state.day);

    // Set the state with the filtered list
    this.setState({ tasklist: allTasks, thisdaystasklist: dayTasks });
  })
	.catch(err => console.log(err));
  
};


  render() {
    return (
      <div className="day-block">
        <div className = "blockheader">
        <h2>{this.state.day}</h2>
        {console.log(this.state.tasklist.length)}
        {this.state.thisdaystasklist.length === 0 && (
            <button
              className="firstadd"
              onClick={() => this.toggleForm()}
            >
              +
            </button>)}
              </div>
        <ul className="todolist">
          {this.state.tasklist.map((item, index) => 
            item.day === this.state.day ? (
            <li
            key={index}
            onMouseEnter={() => this.handleMouseEnter(index)}
            onMouseLeave={() => this.handleMouseLeave(index)}
            
          >
              <button
                className={`add-button ${item.showButton ? 'visible' : ''}`}
                onClick={() => this.toggleForm(index)}
              >
                +
              </button>

              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => this.handleCheckboxChange(index)}
              />
              <div className="list-item-content">
                <span className={item.checked ? 'completed' : ''}>
                  <p className='name-time'>{item.time}</p>
                  <p className='name-time'>{item.name}</p>
                </span>
                
                
              </div>
            </li>
            ): null
          )}
        </ul>
        {this.state.selectedItemIndex !== -1 && (
          <TimeEntryForm
            onClose={this.closeForm}
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default DayBlock;
