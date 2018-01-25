/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import CompareCard from './CompareCard';

describe('CompareCard', () => {

  it('should exist', () => {
    const renderedComponent = shallow(<CompareCard />)

    expect(renderedComponent).toBeDefined()
  })

  it.skip('should should match its snapshot', () => {
  
    const renderedComponent = shallow(<CompareCard card={mockData}/>)
 
  })

  
});