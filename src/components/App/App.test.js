/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
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

  it('compareison, compareCard1, and compareCard 2 should have a default of an empty state', () => {
    expect(renderedComponent.state().compareCard1).toEqual('');
    expect(renderedComponent.state().compareCard2).toEqual('');
    expect(renderedComponent.state().comparison).toEqual({});
  })

  // (save this test for once we're pulling in all data sets)

  // it('cards should have a default state of the new dataSet', () => {
  //   const dataSet = { data: 'test data' };
  //   const mockedMount = jest.fn()
  //   const renderedComponent = shallow(<App componentDidMount={mockedMount}/>)

  //   expect(renderedComponent.state().cards).toEqual({dataSet});

  // })

  // the setState in component did mount
  it('cards should have a default state of 181 districts and 181 cards', () => {

    // expect(renderedComponent.find('.card').length).toEqual(181)
    // expect(renderedComponent.state().cards.length).toEqual(181);

  })

 

     // handleSearch
  // location intake and setState

  it('should take in a location and filter the card set that is rendered from state', () => {

  })

  it('should set compare card1 when a card is selected', () => {
    const mockedClick = jest.fn()
    const renderedComponent = mount(<App compareCard={mockedClick}/>)


    expect(renderedComponent.state().compareCard1).toEqual('');
    renderedComponent.find('article').first().simulate('click')
    expect(renderedComponent.state().compareCard1).toEqual('COLORADO');

  })

  it('should not compare the same district', () => {
    const mockedClick = jest.fn()
    const renderedComponent = mount(<App compareCard={mockedClick}/>)

    expect(renderedComponent.state().compareCard1).toEqual('');
    expect(renderedComponent.state().compareCard2).toEqual('');

    renderedComponent.find('article').first().simulate('click')
    expect(renderedComponent.state().compareCard1).toEqual('COLORADO');
    expect(renderedComponent.state().compareCard2).toEqual('');

    renderedComponent.find('article').first().simulate('click')
    expect(renderedComponent.state().compareCard1).toEqual('');
    expect(renderedComponent.state().compareCard2).toEqual('');

  })

  it('should set compare card 2 when a second card is selected', () => {
    const mockedClick = jest.fn()
    const renderedComponent = mount(<App compareCard={mockedClick}/>)

    expect(renderedComponent.state().compareCard1).toEqual('');
    expect(renderedComponent.state().compareCard2).toEqual('');

    renderedComponent.find('article').first().simulate('click')
    expect(renderedComponent.state().compareCard1).toEqual('COLORADO');
    expect(renderedComponent.state().compareCard2).toEqual('');

    renderedComponent.find('article').last().simulate('click')
    expect(renderedComponent.state().compareCard1).toEqual('COLORADO');
    expect(renderedComponent.state().compareCard2).toEqual('YUMA SCHOOL DISTRICT 1');

  })

  it('should replace card 2 in state when a 3rd card is selected', () => {
    const mockedClick = jest.fn()
    const renderedComponent = mount(<App compareCard={mockedClick}/>)

    expect(renderedComponent.state().compareCard1).toEqual('');
    expect(renderedComponent.state().compareCard2).toEqual('');

    renderedComponent.find('article').at(1).simulate('click')
    expect(renderedComponent.state().compareCard1).toEqual('ACADEMY 20');
    expect(renderedComponent.state().compareCard2).toEqual('');

    renderedComponent.find('article').at(3).simulate('click')
    expect(renderedComponent.state().compareCard1).toEqual('ACADEMY 20');
    expect(renderedComponent.state().compareCard2).toEqual('ADAMS COUNTY 14');

    renderedComponent.find('article').at(7).simulate('click')
    expect(renderedComponent.state().compareCard1).toEqual('ACADEMY 20');
    expect(renderedComponent.state().compareCard2).toEqual('AGUILAR REORGANIZED 6');

  })

  it('should fire compareDistricts and set state when there are two cards', () => {

  })

  it('should return a comparison ration and two average in the comparison card', () => {

  })

  
 
  it('should set the state of compareCard2 to empty to when the card is selected a second time', () => {
    const mockedClick = jest.fn()
    const renderedComponent = mount(<App compareCard={mockedClick}/>)

    expect(renderedComponent.state().compareCard1).toEqual('');
    expect(renderedComponent.state().compareCard2).toEqual('');

    renderedComponent.find('article').first().simulate('click')
    expect(renderedComponent.state().compareCard1).toEqual('COLORADO');
    expect(renderedComponent.state().compareCard2).toEqual('');

    renderedComponent.find('article').last().simulate('click')
    expect(renderedComponent.state().compareCard1).toEqual('COLORADO');
    expect(renderedComponent.state().compareCard2).toEqual('YUMA SCHOOL DISTRICT 1');

    renderedComponent.find('article').last().simulate('click')
    expect(renderedComponent.state().compareCard1).toEqual('COLORADO');
    expect(renderedComponent.state().compareCard2).toEqual('');

  })

  it('should set the state of compareCard1 to empty to when the card is selected a second time', () => {
    const mockedClick = jest.fn()
    const renderedComponent = mount(<App compareCard={mockedClick}/>)

    expect(renderedComponent.state().compareCard1).toEqual('');
    expect(renderedComponent.state().compareCard2).toEqual('');

    renderedComponent.find('article').first().simulate('click')
    expect(renderedComponent.state().compareCard1).toEqual('COLORADO');
    expect(renderedComponent.state().compareCard2).toEqual('');

    renderedComponent.find('article').last().simulate('click')
    expect(renderedComponent.state().compareCard1).toEqual('COLORADO');
    expect(renderedComponent.state().compareCard2).toEqual('YUMA SCHOOL DISTRICT 1');

    renderedComponent.find('article').first().simulate('click')
    expect(renderedComponent.state().compareCard1).toEqual('');
    expect(renderedComponent.state().compareCard2).toEqual('YUMA SCHOOL DISTRICT 1');

  })
})












