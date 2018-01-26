/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import CompareCard from './CompareCard';

describe('CompareCard', () => {

  it('should exist', () => {
    const comparison = { "Denver, Co": 4321, "Boston, Ma": 1234, compared: .609 }
    const renderedComponent = shallow(<CompareCard card={comparison}/>)

    expect(renderedComponent).toBeDefined()
  })

  it('should should match its snapshot', () => {
    const comparison = { "Denver, Co": 4321, "Boston, Ma": 1234, compared: .609 }
    const renderedComponent = shallow(<CompareCard card={comparison}/>)

    expect(renderedComponent).toMatchSnapshot()
  })

  
});