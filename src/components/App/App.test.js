/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';

describe('App', () => {

  let renderedComponent;

  beforeEach(() => {
   renderedComponent = shallow(<App />);
  })

  it('should exist', () => {
    expect(renderedComponent).toBeDefined();
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  })

  it('should have a default of an empty state', () => {
    expect(renderedComponent.state().compareCard1).toEqual('');
    expect(renderedComponent.state().compareCard2).toEqual('');
    expect(renderedComponent.state().comparison).toEqual(null);
  })

  // it('when handleSearch is called with a location, the state should have that matching data', () => {
    

  //   matches = 
  //   { COLORADO: { 
  //     data: { 2004: 0.24, 2005:0.278 },
  //     location: "COLORADO"
  //   }}
  //   const mockedLocation = 'ASPEN 1'

  //   renderedComponent.instance().handleSearch(mockedLocation)
  //   renderedComponent.setState({ cards: []})
  //   expect(renderedComponent.state().cards).toEqual([matches])
  // })
});











