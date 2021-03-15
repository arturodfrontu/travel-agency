import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='text' name='name' />);
  
    expect(component).toBeTruthy();
  });
  
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
  
    expect(component).toEqual({});
  });
  
  it('should render correct "name"', () => {
    const expectedName = 'title';
    const component = shallow(<OrderOption name={expectedName} type='text' />);
    const renderedName = component.find('.title').text();
  
    expect(renderedName).toEqual(expectedName);
  });

});