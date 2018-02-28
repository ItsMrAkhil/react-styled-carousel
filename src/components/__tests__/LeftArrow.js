import React from 'react';
// import { css } from 'styled-components';

import LeftArrow from '../LeftArrow';

describe('<LeftArrow />', () => {
  it('Should render a <div> tag', () => {
    const renderedComponent = shallow(<LeftArrow />);
    expect(renderedComponent.type()).toEqual('button');
  });

  it('Should have a className attribute', () => {
    const renderedComponent = shallow(<LeftArrow />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('Should adopt a valid attribute', () => {
    const id = 'test-id';
    const renderedComponent = shallow(<LeftArrow id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('Should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<LeftArrow attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });

  it('Should have proper border-top, border-right & background-color when not disabled', () => {
    const renderedComponent = shallow(<LeftArrow />);
    expect(renderedComponent).toHaveStyleRule('background-color', '#000000');
    expect(renderedComponent).toHaveStyleRule('border-top', 'solid 2px #000000', {
      modifier: ':before',
    });
    expect(renderedComponent).toHaveStyleRule('border-right', 'solid 2px #000000', {
      modifier: ':before',
    });
  });

  it('Should have proper border-top, border-right & background-color when disabled', () => {
    const renderedComponent = shallow(<LeftArrow disabled />);
    expect(renderedComponent).toHaveStyleRule('background-color', '#B2B2B2');
    expect(renderedComponent).toHaveStyleRule('border-top', 'solid 2px #B2B2B2', {
      modifier: ':before',
    });
    expect(renderedComponent).toHaveStyleRule('border-right', 'solid 2px #B2B2B2', {
      modifier: ':before',
    });
  });

  it('Should have proper cursor when not disabled', () => {
    const renderedComponent = shallow(<LeftArrow />);
    expect(renderedComponent).toHaveStyleRule('cursor', 'pointer');
  });

  it('Should have proper cursor when disabled', () => {
    const renderedComponent = shallow(<LeftArrow disabled />);
    expect(renderedComponent).toHaveStyleRule('cursor', 'not-allowed');
  });
});
