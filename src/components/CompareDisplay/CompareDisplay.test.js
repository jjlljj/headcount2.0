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

  it.skip('should should match its snapshot', () => {
  
    const renderedComponent = shallow(<CompareCard card={mockData}/>)
 
  })

  
});