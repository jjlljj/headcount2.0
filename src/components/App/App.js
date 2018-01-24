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
     this.compareDistricts(location)
    }
  }

  compareDistricts(location) {
    if (this.state.compareCard1) {
      let name1 = this.state.compareCard1
      let name2 = location
      let comparison = districtData.compareDistrictAverages(name1, name2)

      this.setState({ comparison, compareCard2: location })
    }
  }

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
