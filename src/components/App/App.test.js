/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';

describe('App', () => {

  it('should exist', () => {
    const renderedComponent = shallow(<App />);

    expect(wrapper).toBeDefined()
  })

  it('should match snapshot', () => {
    const renderedComponent = shallow(<App />);

    expect(renderedComponent).toMatchSnapshot()
  })

  it('should have', ()=> {
    
  })

});
