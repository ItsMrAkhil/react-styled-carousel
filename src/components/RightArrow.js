import styled from 'styled-components';

const RightArrow = styled.button`
  color: #000;
  position: absolute;
  margin-left: 2px;
  margin-top: 11px;
  width: 16px;
  height: 1px;
  background-color: ${({ disabled }) => disabled ? '#B2B2B2' : '#000000'};
  right: 0px;
  top: calc(50% - 5px);
  border: 0;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  outline: none;
  :before {
    content: '';
    position: absolute;
    right: 1px;
    top: -5px;
    width: 10px;
    height: 10px;
    border-top: solid 2px ${({ disabled }) => disabled ? '#B2B2B2' : '#000000'};
    border-right: solid 2px ${({ disabled }) => disabled ? '#B2B2B2' : '#000000'};
    transform: rotate(45deg);
  }
  :after {
    content: '';
    position: absolute;
  }
`;

export default RightArrow;
