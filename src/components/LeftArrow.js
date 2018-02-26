import styled from 'styled-components';

const LeftArrow = styled.div`
  color: #000;
  position: absolute;
  top: 50%;
  margin-left: 3px;
  margin-top: 10px;
  width: 16px;
  height: 1px;
  background-color: #000;
  left: 0px;
  top: calc(50% - 15px);
  ::before {
    content: '';
    position: absolute;
    left: 1px;
    top: -5px;
    width: 10px;
    height: 10px;
    border-top: solid 1px currentColor;
    border-right: solid 1px currentColor;
    transform: rotate(-135deg);
  }
  ::after {
    content: '';
    position: absolute;
  }
`;

export default LeftArrow;
