import React, { Component } from 'react';
import CardDisplay from '../CardDisplay/CardDisplay';
import Header from '../Header/Header';
import CompareDisplay from '../CompareDisplay/CompareDisplay';
import DistrictRepository from '../helper/helper';
import './App.css';

const dataFiles = {
  kinderData: require('../../data/kindergartners_in_full_day_program.js')
}

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dataSet: new DistrictRepository(dataFiles.kinderData),
      cards: {},
      compareCard1: '',
      compareCard2: '',
      comparison: {}
    }
  }

  componentDidMount() {
    this.setState({ 
      cards: this.state.dataSet.data
    })
  }

  //loadNewDataSet() {
  //   this.data = new DistrictRepository(dataSetName)
  // }

  handleSearch = (location) =>  {
    const matches = this.state.dataSet.findAllMatches(location)

    const cards = matches.reduce((acc, match) => {
      acc[match.location] = match
      return acc
    }, {});

    this.setState({
      cards
    })
  }

  compareCard = (location) => {

    if (!this.state.compareCard1) {
      this.setState({
        compareCard1: location
      })
    }

    if (this.state.compareCard1) {
     this.compareDistricts(location)
    }
  }

  removeCard = (blam) => {
    this.setState({compareCard1:'', compareCard2:''})

  }

  compareDistricts(location) {
    if (this.state.compareCard1) {
      let name1 = this.state.compareCard1
      let name2 = location
      let comparison = this.state.dataSet.compareDistrictAverages(name1, name2)

      this.setState({ comparison, compareCard2: location })
    }
  }

  render() {
    return (
      <div className="app-container">
        <Header handleSearch={this.handleSearch} />
          <CompareDisplay 
            card1={this.state.dataSet.data[this.state.compareCard1]}
            comparison={this.state.comparison} 
            card2={this.state.dataSet.data[this.state.compareCard2]}
            removeCard={this.removeCard}/>
        <CardDisplay cards={this.state.cards} compareCard={this.compareCard}/>
      </div>
    );
  }
}

export default App;
