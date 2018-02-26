import React from 'react';
import styled from 'styled-components';

const Dot = styled.li.attrs({
  children: (props) => <button onClick={props.onClick}>•</button>
})`
  display: inline-block;
  pointer-events: none;
  > button {
    pointer-events: all;
    border: 0;
    background: 0 0;
    cursor: pointer;
    font-size: 1.8em;
    line-height: 1.2em;
    margin: 0 5px;
    ${({active}) => active ? 'color: #000000;' : 'color: #E5E5E5;'}
    :hover {
      color: #000000;
    }
    :focus {
      outline: none;
    }
  }
`;

export default Dot;
