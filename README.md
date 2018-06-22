# React Styled Slider
**React Styled Slider** is a react and styled component slider. It is fully configurable.

[![Build Status](https://travis-ci.org/ItsMrAkhil/react-styled-carousel.svg?branch=master)](https://travis-ci.org/ItsMrAkhil/react-styled-carousel)
[![Coverage Status](https://coveralls.io/repos/github/ItsMrAkhil/react-styled-carousel/badge.svg?branch=coveralls)](https://coveralls.io/github/ItsMrAkhil/react-styled-carousel?branch=coveralls)

![Live Image](https://res.cloudinary.com/dzfragjmc/image/upload/v1519651815/ezgif-5-efffafcdbd_skf8yd.gif)

#### Features
  - Mostly configurable
  - Styled-Components
  - No external CSS required.
  - Server Side Rendering supported

> **Note:**  **Server Side Rendering** works well without the styled-components collectStyles function also. But for better user experience please use **collectStyles** function from **styled-components**

#### Installation
```sh
$ npm install --save react-styled-carousel
```

#### Running example in local
```sh
$ git clone github.com/itsMrAkhil/react-styled-carousel
$ npm start
```
It'll open localhost:9000 port, where you can see live demo.

#### Example
```js
import React from 'react';
import ReactDOM from 'react-dom'
import Slider from 'react-styled-carousel';

const ExampleSlider = () => (
  <Slider>
    <h1>1</h1>
    <h1>2</h1>
    <h1>3</h1>
    <h1>4</h1>
  </Slider>
);

ReactDOM.render(<ExampleSlider />, document.getElementById('root'));
```

#### Responsive
`react-styled-carousel` is responsive. Below is the example configuration of responsiveness.

> **Note:** If `responsive` prop is provided then, it'll override the cardsToShow prop. In other words cardsToShow will not work.

```js
import React from 'react';
import ReactDOM from 'react-dom'
import Slider from 'react-styled-carousel';

const responsive = [
  { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 2 },
];

const ExampleSlider = () => (
  <Slider reponsive={responsive} >
    <h1>1</h1>
    <h1>2</h1>
    <h1>3</h1>
    <h1>4</h1>
  </Slider>
);

ReactDOM.render(<ExampleSlider />, document.getElementById('root'));
```

#### Configurable Props
Props | Type | Default Value | Description
----- | ---- | ------------- | -----------
`showArrows` | `Boolean` | `true` | If `true` then only Arrows of navigation will be shown
`showDots` | `Boolean` | `true` | Show navigation or pagination dots below the slider
`infinite` | `Boolean` | `true` | Infinitely slide cards.
`Dot` | `React Node` | Default | Customized pagination button (`Active slide Dot` will get `active` as `Boolean` prop.)
`DotsWrapper` | `Styled Element` | Default | Customized wrapper for your <Dot /> component to change the view of dots wrapper like position, background, etc. `Note: It should be a styled ul, otherwise you may not see any Dot Components.`
`LeftArrow` | `React Node` | Default | Customized left arrow button. It'll get `disabled Boolean` prop if first Dot is active and infinite is false.
`RightArrow` | `React Node` | Default | Customized right arrow button. It'll get `disabled Boolean` prop if last Dot is active and infinite is false.
`children` | `React Node` | null | Cards are components which you want to show in the carousel
`cardsToShow` | `Number` | Children length | How many cards to be shown for a single slide.
`afterSlide` | `Function` | null | This function will be executed after every sliding is completed
`beforeSlide` | `Function` | null | This function will be executed before starting every sliding
`responsive` | `Array` | null | Use this for responsiveness [Documentation](#responsive)
`autoSlide` | `Number` or `Boolean` | `2000` | Used to make carousel auto slide for every given time interval. Or for 2000ms if the prop value is true.
`pauseOnMouseOver`| `Boolean` | `true` | Pause auto sliding on mouse over the carousel.
`hideArrowsOnNoSlides` | `Boolean` | `true` | Hide arrows if there is only one slide to show.
`margin`| `String` | `0px` | Any valid css margin value for giving margin around the slider
`padding` | `String` | `0px 20px` | Any valid css padding value for giving padding around the slider

License
----
MIT (**Free Software, Chill Yeah!**)
