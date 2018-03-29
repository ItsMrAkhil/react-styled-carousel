import React from 'react';

import DotsWrapper from '../DotsWrapper';

describe('<DotsWrapper />', () => {
  it('Should render a <div> tag', () => {
    const renderedComponent = shallow(<DotsWrapper />);
    expect(renderedComponent.type()).toEqual('ul');
  });

  it('Should have a className attribute', () => {
    const renderedComponent = shallow(<DotsWrapper />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('Should adopt a valid attribute', () => {
    const id = 'test-id';
    const renderedComponent = shallow(<DotsWrapper id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('Should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<DotsWrapper attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
