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
      compareCard1: '',
      compareCard2: '',
      comparison: ''
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

  compareCard = (location) => {
    console.log('card clicked', location)

    if (!this.state.compareCard1) {
      this.setState({
        compareCard1: location
      })
    }

    if (this.state.compareCard1) {
      this.setState({
        compareCard2: location
      })
    }
    this.compareDistricts()
  }

  compareDistricts() {
    if (this.state.compareCard1 && this.state.compareCard2) {
      let name1 = this.state.compareCard1
      let name2 = this.state.compareCard2
      let comparison = districtData.compareDistrictAverages(name1, name2)

      this.setState({ comparison })
    }
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
      <div>
      <Header handleSearch={this.handleSearch} compareDistrict={this.compareDistrict}/>
      <CardDisplay cards={this.state.cards} compareCard={this.compareCard}/>
      </div>
    );
  }
}

export default App;
