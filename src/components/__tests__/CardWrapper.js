import React from 'react';

import CardWrapper from '../CardWrapper';

describe('<CardWrapper />', () => {
  it('Should render a <div> tag', () => {
    const renderedComponent = shallow(<CardWrapper />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('Should have a className attribute', () => {
    const renderedComponent = shallow(<CardWrapper />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('Should adopt a valid attribute', () => {
    const id = 'test-id';
    const renderedComponent = shallow(<CardWrapper id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('Should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<CardWrapper attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });

  it('Should adopt the width given from the props', () => {
    const renderedComponent = shallow(<CardWrapper width="50" />);
    expect(renderedComponent).toHaveStyleRule('width', '50%');
  });
});
