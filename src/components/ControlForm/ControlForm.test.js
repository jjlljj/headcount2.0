/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ControlForm from './ControlForm';

describe.only('ControlForm', () => {

let renderedComponent;

  beforeEach(() => {
   renderedComponent = shallow(<ControlForm />);
  })

  it('should exist', () => {
    expect(renderedComponent).toBeDefined();
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  })

  it('should have a default of an empty state', () => {
    expect(renderedComponent.state().location).toEqual('');
  })

  it('should call handleSearch from props on change', () => {
    const mockedSearch = jest.fn();
    const controlForm = shallow(<ControlForm handleSearch={mockedSearch} />);

    expect(mockedSearch.mock.calls.length).toBe(0);
    // James - I had to mock/stub the preventDefault to remove an error
    controlForm.find('input').simulate('change', { target: { value: 'ASPEN 1'}, preventDefault: () => {} });
    expect(mockedSearch.mock.calls.length).toEqual(1);
  
  })

  it('should update location upon setState', () => {
    const mockedSearch = jest.fn();
    const controlForm = shallow(<ControlForm handleSearch={mockedSearch} />);

    expect(controlForm.state().location).toEqual('');
    controlForm.find('input').simulate('change', { target: { value: 'ASPEN 1'}, preventDefault: () => {} });
    expect(controlForm.state().location).toEqual('ASPEN 1');
  })

});