import styled from 'styled-components';

const SliderList = styled.div`
  transform: translateX(${({ translateX }) => translateX ? `-${translateX}%` : '0%'});
  transition: transform 0.6s ease-in-out;
`;
export default SliderList;
