import styled from 'styled-components';

const LeftArrow = styled.button`
  color: #000;
  position: absolute;
  margin-left: 3px;
  margin-top: 11px;
  width: 16px;
  height: 2px;
  background-color: #000;
  left: 0px;
  top: calc(50% - 5px);
  border: 0;
  cursor: pointer;
  outline: none;
  ::before {
    content: '';
    position: absolute;
    left: 1px;
    top: -5px;
    width: 10px;
    height: 10px;
    border-top: solid 2px currentColor;
    border-right: solid 2px currentColor;
    transform: rotate(-135deg);
  }
  ::after {
    content: '';
    position: absolute;
  }
`;

export default LeftArrow;
