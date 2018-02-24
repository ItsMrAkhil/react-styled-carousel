import styled from 'styled-components';

const CardWrapper = styled.div`
  float: left;
  display: table-column;
  outline: none;
  width: ${({ width }) => width};
  min-height: 1px;
  margin: 0;
  padding: 0;
`;

export default CardWrapper;
