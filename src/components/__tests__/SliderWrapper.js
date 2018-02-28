import React from 'react';

import SliderWrapper from '../SliderWrapper';

describe('<SliderWrapper />', () => {
  it('Should render a <div> tag', () => {
    const renderedComponent = shallow(<SliderWrapper />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('Should have a className attribute', () => {
    const renderedComponent = shallow(<SliderWrapper />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('Should adopt a valid attribute', () => {
    const id = 'test-id';
    const renderedComponent = shallow(<SliderWrapper id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('Should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<SliderWrapper attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
