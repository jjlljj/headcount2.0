import React, { Component } from 'react';
import './ControlForm.css';
import { func } from 'prop-types';

class ControlForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    };
  }

  handleFormInput = (event) => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({
      location: value
    });
    this.props.handleSearch(value);
  }

  render() {
    return (
      <form 
        className="control-form" 
        onSubmit={ (event)=> event.preventDefault()} >
        <label htmlFor='searchDistrict'>Find your district</label>  
        <input 
          id='searchDistrict'
          type='text'
          placeholder='Search school district'
          onChange={this.handleFormInput}
          value={this.state.location}
        />
      </form>
    );
  }
}

ControlForm.propTypes = {
  handleSearch: func
};

export default ControlForm;
