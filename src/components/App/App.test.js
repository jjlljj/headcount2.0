/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import App from './App';

describe('App', () => {

  it('should exist', () => {
    const renderedComponent = shallow(<App />);

    expect(renderedComponent).toBeDefined()
  })

  it('should match snapshot', () => {
    const renderedComponent = shallow(<App />);

    expect(renderedComponent).toMatchSnapshot()
  })

  it('should have', ()=> {
    
  })

});
