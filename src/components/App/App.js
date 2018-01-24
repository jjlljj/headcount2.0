import React, { Component } from 'react';
import CardDisplay from '../CardDisplay/CardDisplay'
import Header from '../Header/Header'
import DistrictRepository from '../helper/helper'
import './App.css';

const dataFiles = {
  'kinderData': require('../../data/kindergartners_in_full_day_program.js')
}

const districtData = new DistrictRepository(dataFiles.kinderData)

class App extends Component {

  constructor() {
    super()

    this.state = {
      cards: [],
      compareCards: []
    }
  }

  componentDidMount() {

  }

  // handleSearch()
  // search for a specific school
  // on change, is a keypress not a submit button
  // calls find all matches and then setState
  // to render only those cards - cards should update live


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
      <Header />
      <CardDisplay />
      </div>
    );
  }
}

export default App;
