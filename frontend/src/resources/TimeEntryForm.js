import React, { Component } from "react";

import './TimeEntryForm.css';

// Pass 'onClose' as a prop to YourFormComponent

class YourFormComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
    activeItem: this.props.activeItem
    };
  }
  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
    value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

handleCancel = () => {
    // Reset the form values and close the form
    const {  onClose } = this.props;
    onClose(); // Call the 'onClose' function to close the form
    
  };
render() {
  const {  onSave } = this.props;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <form id="myForm" onSubmit={this.handleSubmit}>
          <div className="inputs">
            <div>
              <label>Time:</label>
              <input
                type="time"
                name="time"
                value={this.state.activeItem.time}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.activeItem.text}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='buttons'>
            <button className="submit" color="success" onClick={() => onSave(this.state.activeItem)}>
              Save
            </button>
            <button type="button" onClick={this.handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
}
export default YourFormComponent;
