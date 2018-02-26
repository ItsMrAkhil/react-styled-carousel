import styled from 'styled-components';

const RightArrow = styled.div`
  color: #000;
  position: absolute;
  margin-left: 2px;
  margin-top: 10px;
  width: 16px;
  height: 1px;
  background-color: currentColor;
  right: 0px;
  top: calc(50% - 15px);
  ::before {
    content: '';
    position: absolute;
    right: 1px;
    top: -5px;
    width: 10px;
    height: 10px;
    border-top: solid 1px currentColor;
    border-right: solid 1px currentColor;
    transform: rotate(45deg);
  }
  ::after {
    content: '';
    position: absolute;
  }
`;

export default RightArrow;
