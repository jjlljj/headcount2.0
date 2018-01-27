/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CardDisplay from './CardDisplay';

describe('CardDisplay', () => {

  it('should exist', () => {
    const mockData = { "Denver, Co": { location: 'Denver, Co', data: { 2004: 0.007, 2005: 1.112, 200: 7.110 } }
    }
    const selectedCards =  { card1: "", card2: "" }

    const renderedComponent = shallow(<CardDisplay cards={ mockData } selected={ selectedCards } />)

    expect(renderedComponent).toBeDefined()
  })

  it('should render 2 child cards and match snapshot', ()=> {
    const mockData = { "Denver, Co": { location: 'Denver, Co', data: { 2004: 0.007, 2005: 1.112, 200: 7.110 } },
      "Boston, Ma": { location: 'Boston, Ma', data: { 2004: 0.023, 2005: 3.112, 2006: 7.110 } }
    }
    const selectedCards =  { card1: "", card2: "" }

    const renderedComponent = shallow(<CardDisplay cards={ mockData } selected={ selectedCards }/>)

    expect(renderedComponent.find('Card').length).toEqual(2)
    expect(renderedComponent).toMatchSnapshot();
  })

  it('should match snapshot with 3 cards', ()=> {
    const mockData = { "Denver, Co": { location: 'Denver, Co', data: { 2004: 0.007, 2005: 1.112, 200: 7.110 } },
      "Boston, Ma": { location: 'Boston, Ma', data: { 2004: 0.023, 2005: 3.112, 2006: 7.110 } },
      "Orlando, Fl": { location: 'Orlando, Fl', data: { 2004: 0.111, 2005: 3.987, 2006: 2.110 } }
    }
    const selectedCards =  { card1: "", card2: "" }

    const renderedComponent = shallow(<CardDisplay cards={ mockData } selected={ selectedCards }/>)

     expect(renderedComponent).toMatchSnapshot();
  })

});