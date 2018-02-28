import React from 'react';

import Dots from '../Dots';

describe('<Dots />', () => {
  it('Should render a <div> tag', () => {
    const renderedComponent = shallow(<Dots />);
    expect(renderedComponent.type()).toEqual('ul');
  });

  it('Should have a className attribute', () => {
    const renderedComponent = shallow(<Dots />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('Should adopt a valid attribute', () => {
    const id = 'test-id';
    const renderedComponent = shallow(<Dots id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('Should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Dots attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
