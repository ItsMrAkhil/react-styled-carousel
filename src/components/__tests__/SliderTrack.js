import React from 'react';

import SliderTrack from '../SliderTrack';

describe('<SliderTrack />', () => {
  it('Should render a <div> tag', () => {
    const renderedComponent = shallow(<SliderTrack />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('Should have a className attribute', () => {
    const renderedComponent = shallow(<SliderTrack />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('Should adopt a valid attribute', () => {
    const id = 'test-id';
    const renderedComponent = shallow(<SliderTrack id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('Should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<SliderTrack attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
