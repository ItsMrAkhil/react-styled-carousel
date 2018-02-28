import React from 'react';
import { css } from 'styled-components';

import Dot from '../Dot';

describe('<Dot />', () => {
  it('Should render a <div> tag', () => {
    const renderedComponent = shallow(<Dot />);
    expect(renderedComponent.type()).toEqual('li');
  });

  it('Should have a className attribute', () => {
    const renderedComponent = shallow(<Dot />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('Should adopt a valid attribute', () => {
    const id = 'test-id';
    const renderedComponent = shallow(<Dot id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('Should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Dot attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });

  it('Should render a <button> tag inside', () => {
    const renderedComponent = shallow(<Dot />);
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('Should have a valid color value inside rendered <button> tag', () => {
    const renderedComponent = shallow(<Dot />);
    expect(renderedComponent).toHaveStyleRule('color', '#E5E5E5', {
      modifier: css`button`,
    });
  });

  it('Should have a valid color value inside rendered <button> tag when <Dot /> is active', () => {
    const renderedComponent = shallow(<Dot active />);
    expect(renderedComponent).toHaveStyleRule('color', '#000000', {
      modifier: css`button`,
    });
  });

  it('Should have a valid color value inside rendered <button> tag when :hovered', () => {
    const renderedComponent = shallow(<Dot />);
    expect(renderedComponent).toHaveStyleRule('color', '#000000', {
      modifier: css`button:hover`,
    });
  });
});
