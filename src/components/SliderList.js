import styled from 'styled-components';

const SliderList = styled.div`
  transform: translateX(
    ${({ translateX }) => (translateX ? `-${translateX}%` : '0%')}
  );
  transition: transform
    ${({ duration }) => (duration ? `${duration}ms` : '600ms')}
    ${({ easing }) => easing || 'ease-in-out'};
`;

export default SliderList;
