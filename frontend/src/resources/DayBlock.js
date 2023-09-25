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
        title: "vdvd",
        description: "dfvvdf",
        completed: false
      },
      tasklist: [
        { text: 'Item 1', checked: false, time: '10:00 AM' },
        { text: 'Item 2', checked: false, time: '2:30 PM' },
        { text: 'Item 3', checked: false, time: '4:45 PM' },
      ],
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

  refreshList = () => {
    axios //Axios to send and receive HTTP requests
    .get("http://localhost:8000/api/tasks/")
    .then(res => this.setState({ taskList: res.data }))
    .catch(err => console.log(err));
  };

  // Submit an item
handleSubmit = (item) => {
  
	this.toggle();
  console.log("11111111111")
	alert("save" + JSON.stringify(item));
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
	.then((res) => this.refreshList());
};


  render() {
    return (
      <div className="day-block">
        <h2>{this.state.day}</h2>
        <ul className="todolist">
          {this.state.tasklist.map((item, index) => (
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
                  <p className='name-time'>{item.text}</p>
                </span>
              </div>
            </li>
          ))}
        </ul>
        {this.state.selectedItemIndex !== -1 && (
          <TimeEntryForm onClose={this.closeForm} 
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
