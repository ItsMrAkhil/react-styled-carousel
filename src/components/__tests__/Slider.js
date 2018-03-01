import React from 'react';

import Slider from '../Slider';
import SliderWrapper from '../SliderWrapper';
import SliderTrack from '../SliderTrack';
import CardWrapper from '../CardWrapper';

describe('<Slider />', () => {
  it('Should match the snapshot with single child', () => {
    const renderedComponent = shallow(<Slider><div /></Slider>);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('Should match the snapshot with multiple children', () => {
    const renderedComponent = shallow(<Slider><div /><h1>Hello</h1></Slider>);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('Should render all the wrapper components', () => {
    const renderedComponent = shallow(<Slider><h1>Hello</h1></Slider>);
    expect(renderedComponent.find(SliderWrapper)).toHaveLength(1);
    expect(renderedComponent.find(SliderWrapper)).toHaveLength(1);
    expect(renderedComponent.find(SliderTrack)).toHaveLength(1);
  });

  it('Should render <CardWrapper> around every child', () => {
    const children = [<div key={1} />, <div key={2} />, <div key={3} />];
    const renderedComponent = shallow(<Slider>{children}</Slider>);
    expect(renderedComponent.find(CardWrapper)).toHaveLength(children.length);
  });
});

