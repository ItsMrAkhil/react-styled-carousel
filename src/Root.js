import React from 'react';
import { hot } from 'react-hot-loader';
import 'normalize.css';

import Slider from './components/Slider';
import ExampleCard from './components/ExampleCard';
import Container from './components/Container';

const Root = () => (
  <Container>
    <h1>Styled Carousel Example</h1>
    <Slider
      cardsToShow={4}
      padding="0px 25px"
      margin="3em 0 0 0"
    >
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
