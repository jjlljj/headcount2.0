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

    const renderedComponent = shallow(<CardDisplay cards={ mockData } />)

    expect(renderedComponent).toBeDefined()
  })

  it('should render child cards', ()=> {
    const mockData = { "Denver, Co": { location: 'Denver, Co', data: { 2004: 0.007, 2005: 1.112, 200: 7.110 } },
      "Boston, Ma": { location: 'Boston, Ma', data: { 2004: 0.023, 2005: 3.112, 2006: 7.110 } }
    }
    const renderedComponent = shallow(<CardDisplay cards={ mockData }/>)

    expect(renderedComponent.find('Card').length).toEqual(2)
   })

  it('should match snapshot', ()=> {
    const mockData = { "Denver, Co": { location: 'Denver, Co', data: { 2004: 0.007, 2005: 1.112, 200: 7.110 } },
      "Boston, Ma": { location: 'Boston, Ma', data: { 2004: 0.023, 2005: 3.112, 2006: 7.110 } }
    }
    const renderedComponent = shallow(<CardDisplay cards={ mockData }/>)

     expect(renderedComponent).toMatchSnapshot();
  })

});