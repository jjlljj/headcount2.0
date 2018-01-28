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
    expect(renderedComponent.state().comparison).toEqual(null);
  })

  // (save this test for once we're pulling in all data sets)

  // it('cards should have a default state of the new dataSet', () => {
  //   const dataSet = { data: 'test data' };
  //   const mockedMount = jest.fn()
  //   const renderedComponent = shallow(<App componentDidMount={mockedMount}/>)

  //   expect(renderedComponent.state().cards).toEqual({dataSet});

  // })


  it('should take in a location and filter the card set that is rendered from state', () => {
    const renderedComponent = mount(<App />)

    const searchResult = 
      {'ASPEN 1':
        {
          location: 'ASPEN 1',
          data: {
            2004: 1,
            2005: 1,
            2006: 1,
            2007: 1,
            2008: 1,
            2009: 1,
            2010: 1,
            2011: 1,
            2012: 1,
            2013: 1,
            2014: 0.992
          }
        }
      }
   

    renderedComponent.find('input').simulate('change', { target: { value: 'ASPEN 1' }, preventDefault: () => {} });
    expect(renderedComponent.state().cards).toEqual(searchResult);
    expect(renderedComponent.find('CardDisplay').length).toEqual(1)

  })

  // it('should display 1 card in the CompareDisplay when a first card is selected', () => {
  //   const mockedClick = jest.fn()
  //   const renderedComponent = mount(<App compareCard={mockedClick}/>)

  //   renderedComponent.find('article').first().simulate('click')

  //   expect(renderedComponent.find('CompareDisplay').find('section').length).toEqual(1);
  //   expect(renderedComponent.find('CompareDisplay').find('section').find('article').length).toEqual(3)
  //   expect(renderedComponent.find('CompareDisplay').find('section').find('article').first().find('Card').find('h5').text()).toEqual('COLORADO');

  // })

  // it('should display 2 cards in the CompareDisplay when a second card is selected', () => {
  //   const mockedClick = jest.fn()
  //   const renderedComponent = mount(<App compareCard={mockedClick}/>)

  //   renderedComponent.find('article').first().simulate('click')
  //   // renderedComponent.find('article').last().simulate('click')

  //   expect(renderedComponent.find('CompareDisplay').find('section').length).toEqual(1);
  //   expect(renderedComponent.find('CompareDisplay').find('Card').at(1).find('h5').text()).toEqual('COLORADO');
  //   expect(renderedComponent.find('CompareDisplay').find('Card').at(2).find('h5').text()).toEqual('YUMA SCHOOL DISTRICT 1');
  // })

  // it('should display 2 cards in the CompareDisplay when a third card is selected', () => {
    
  // })

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
      const renderedComponent = mount(<App />)
      renderedComponent.find('article').at(1).simulate('click')
      renderedComponent.find('article').at(3).simulate('click')

      console.log(renderedComponent.state)

      expect(renderedComponent.state().comparison).toEqual({
        "ACADEMY 20": 0.407,
        "ADAMS COUNTY 14": 0.709,
        compared: 0.574
      })
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


