import styled from 'styled-components';

const CardWrapper = styled.div`
  outline: none;
  width: ${({ width }) => `${width}%`};
  min-height: 1px;
  margin: 0;
  padding: 0;
  display: inline-block;
  vertical-align: top;
  white-space: normal;
`;

export default CardWrapper;
