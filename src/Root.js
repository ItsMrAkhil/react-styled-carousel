import React from 'react';
import { hot } from 'react-hot-loader';
import 'normalize.css';

import Slider from './components/Slider';
import ExampleCard from './components/ExampleCard';
import Container from './components/Container';

const responsive = [
  { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 2 },
];

const Root = () => (
  <Container>
    <h1>Styled Carousel Example</h1>
    <Slider responsive={responsive}>
      <ExampleCard>1</ExampleCard>
      <ExampleCard>2</ExampleCard>
      <ExampleCard>3</ExampleCard>
      <ExampleCard>4</ExampleCard>
      <ExampleCard>5</ExampleCard>
      <ExampleCard>6</ExampleCard>
    </Slider>
  </Container>
);

export default hot(module)(Root);
