import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', ()=>{

  it('should render without crashing', ()=>{
    const component = shallow(<TripSummary id='abc' image='image' alt='name' name='name' cost='cost' days={1} tags={['test', 'test']}/>);

    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should have correct "src" and "alt"', ()=>{
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary id='test' image={expectedSrc} alt={expectedAlt} name='name' cost='cost' days={1} tags={['test', 'test']}/>);
    const renderedSrc = component.find('img').prop('src');
    const renderedAlt = component.find('img').prop('alt');

    expect(renderedSrc).toEqual(expectedSrc);
    expect(renderedAlt).toEqual(expectedAlt);
  });

  it('should render correct props "name","cost","days"', ()=>{
    const expectedCost ='cost';
    const expectedName = 'name';
    const expectedDays = 1;
    const component = shallow(<TripSummary id='test' image='image.jpg' src='src' alt='alt' name={expectedName} cost={expectedCost} days={expectedDays} tags={['test', 'test']} />);
    const renderedName = component.find('.title').text();
    const renderedCost = component.find('.details').childAt(1).text();
    const renderedDays = component.find('.details').childAt(0).text();

    expect(renderedCost).toEqual(`from ${expectedCost}`);
    expect(renderedName).toEqual(expectedName);
    expect(renderedDays).toEqual(`${expectedDays} days`);
  });

  it('should render correct tags', ()=>{
    const expectedTags = ['1','2','3'];
    const component = shallow(<TripSummary id='test' image='image' name='name' cost='cost' days={1} tags={expectedTags} />);
      
    for(let tag in expectedTags){
      const renderedTag = component.find('.tag').at(tag).text();

      expect(renderedTag).toEqual(expectedTags[tag]);
    }
  });
  it('should throw error if tags are FALSE', ()=>{
    const component = shallow(<TripSummary id='test' image='image' name='name' cost='cost' days={1} tags={[]} />);
    const checkedDiv = component.find('.tags').exists();
    expect(checkedDiv).toEqual(false); 
  });
});