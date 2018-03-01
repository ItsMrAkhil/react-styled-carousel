import React from 'react';

import ExampleCard from '../ExampleCard';

describe('<ExampleCard />', () => {
  it('Should render a <div> tag', () => {
    const renderedComponent = shallow(<ExampleCard />);
    expect(renderedComponent.type()).toEqual('h1');
  });

  it('Should have a className attribute', () => {
    const renderedComponent = shallow(<ExampleCard />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('Should adopt a valid attribute', () => {
    const id = 'test-id';
    const renderedComponent = shallow(<ExampleCard id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('Should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<ExampleCard attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
