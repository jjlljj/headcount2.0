import React, { Component } from 'react';
import './ControlForm.css';

class ControlForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: ''
    }
  }

  handleFormInput = (e) => {
    e.preventDefault();
    const { value } = e.target
    this.setState({
      location: value
    })
    this.props.handleSearch(value)
  }

  render() {
    return (
      <form>
        <label htmlFor='searchDistrict'>Find your district</label>  
        <input 
          id='searchDistrict'
          type='text'
          onChange={this.handleFormInput}
          value={this.state.location}
         />
      </form>
    );
  }
}

export default ControlForm;
