/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import CompareDisplay from './CompareDisplay';

describe('CompareDisplay', () => {

  it('should exist', () => {
    const renderedComponent = shallow(<CompareDisplay />)

    expect(renderedComponent).toBeDefined()
  })

  it('should render child components', ()=> {
    const card1 = { location: 'Denver, Co', data: { 2004: 0.007, 2005: 1.112, 200: 7.110 } }
    const card2 = { location: 'Boston, Ma', data: { 2004: 0.023, 2005: 3.112, 2006: 7.110 } }
    const comparison = { "Denver, Co": 4321, "Boston, Ma": 1234, compared: .609 }

    const renderedComponent = shallow(<CompareDisplay card1="card1" card2="card2" comparison="comparison"/>)

    expect(renderedComponent.find('Card')).toBeDefined()
    expect(renderedComponent.find('CompareCard')).toBeDefined()
  })

  it('should match snapshot', ()=> {
    const card1 = { location: 'Denver, Co', data: { 2004: 0.007, 2005: 1.112, 200: 7.110 } }
    const card2 = { location: 'Boston, Ma', data: { 2004: 0.023, 2005: 3.112, 2006: 7.110 } }
    const comparison = { "Denver, Co": 4321, "Boston, Ma": 1234, compared: .609 }

    const renderedComponent = shallow(<CompareDisplay card1="card1" card2="card2" comparison="comparison"/>)

    expect(renderedComponent).toMatchSnapshot()
  });
  
});