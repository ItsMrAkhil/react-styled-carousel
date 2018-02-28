import React from 'react';

import Container from '../Container';

describe('<Container />', () => {
  it('Should render a <div> tag', () => {
    const renderedComponent = shallow(<Container />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('Should have a className attribute', () => {
    const renderedComponent = shallow(<Container />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('Should adopt a valid attribute', () => {
    const id = 'test-id';
    const renderedComponent = shallow(<Container id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('Should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Container attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
