import React, { Component } from 'react';
import CardDisplay from '../CardDisplay/CardDisplay'
import Header from '../Header/Header'
import DistrictRepository from '../helper/helper'
import './App.css';

const dataFiles = {
  kinderData: require('../../data/kindergartners_in_full_day_program.js')
}

const districtData = new DistrictRepository(dataFiles.kinderData)

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cards: {},
      compareCards: []
    }
  }

  componentDidMount() {
    let cards = districtData
    
    this.setState({ 
      cards: districtData.data
     })
  }

  handleSearch = (location) =>  {
    const matches = districtData.findAllMatches(location)
    this.setState({
      cards: matches
    })
  }

  // handleCardClick() - will get passed down
  // identify my two cards
  // pass name(location) up from cards
  // re render those cards to the top of the page - setState( )
  // render a compare card
  // call helper function for compareDistrict
  // render compare data - returned from compare District

  render() {
    return (
      <div className="app-container">
        <Header handleSearch={this.handleSearch} />
        <CardDisplay cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
