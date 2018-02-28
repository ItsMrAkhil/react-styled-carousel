import React from 'react';

import SliderList from '../SliderList';

describe('<SliderList />', () => {
  it('Should render a <div> tag', () => {
    const renderedComponent = shallow(<SliderList />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('Should have a className attribute', () => {
    const renderedComponent = shallow(<SliderList />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('Should adopt a valid attribute', () => {
    const id = 'test-id';
    const renderedComponent = shallow(<SliderList id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('Should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<SliderList attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });

  it('Should adopt proper translateX given through props', () => {
    const renderedComponent = shallow(<SliderList translateX="50" />);
    expect(renderedComponent).toHaveStyleRule('transform', 'translateX(-50%)');
  });

  it('Should adopt default translateX if nothing given through props', () => {
    const renderedComponent = shallow(<SliderList />);
    expect(renderedComponent).toHaveStyleRule('transform', 'translateX(0%)');
  });
});
