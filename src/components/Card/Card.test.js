/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Card from './Card';

describe('Card', () => {

  it('should exist', () => {
    const mockData = { location: 'Denver, Co', data: { 2004: 0.007, 2005: 1.112, 200: 7.110 } }
    const renderedComponent = shallow(<Card card={mockData}/>)

    expect(renderedComponent).toBeDefined()
  })

  it('should should match its snapshot', () => {
    const mockData = { location: 'Denver, Co', data: { 2004: 0.007, 2005: 1.112, 200: 7.110 } }
    const renderedComponent = shallow(<Card card={mockData}/>)

    expect(renderedComponent).toMatchSnapshot();
  })

  it('should fire the clickHandler when it is clicked', () => {
    const mockData = { location: 'Denver, Co', data: { 2004: 0.007, 2005: 1.112, 200: 7.110 } }
    const mockClickHandler = jest.fn()
    const renderedComponent = shallow(<Card card={mockData} clickHandler={mockClickHandler}/>)

    renderedComponent.find('div').simulate('click')

    expect(mockClickHandler).toHaveBeenCalled();
  })
  
});