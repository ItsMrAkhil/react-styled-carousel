import React from 'react';
import PropTypes from 'prop-types';

import SliderTrack from './SliderTrack';
import CardWrapper from './CardWrapper';
import DefaultRightArrow from './RightArrow';
import DefaultLeftArrow from './LeftArrow';
import SliderWrapper from './SliderWrapper';
import SliderList from './SliderList';
import DefaultDotsWrapper from './DotsWrapper';
import DefaultDot from './Dot';
import Timer from '../utils/Timer';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.changeInitialCard = this.changeInitialCard.bind(this);
    this.renderDots = this.renderDots.bind(this);
    this.renderLeftArrow = this.renderLeftArrow.bind(this);
    this.renderRightArrow = this.renderRightArrow.bind(this);
    this.updateResponsiveView = this.updateResponsiveView.bind(this);
    this.state = {
      initialCard: 0,
      childWidth: 0,
      cardsToShow: 0,
      hideArrows: false,
    };
  }

  componentDidMount() {
    const {
      children, cardsToShow: cardsToShowProp,
      duration,
      autoSlide, hideArrowsOnNoSlides,
    } = this.props;
    const numberOfChildren = children ? children.length || 1 : 0;
    const cardsToShow = cardsToShowProp || numberOfChildren;
    const childWidth = 100 / cardsToShow;
    this.setState({
      childWidth,
      cardsToShow,
      hideArrows: hideArrowsOnNoSlides && numberOfChildren <= cardsToShow,
    }, () => this.updateResponsiveView());
    typeof window !== 'undefined'
      && window.addEventListener('resize', this.updateResponsiveView);
    if (autoSlide) {
      this.autoSlider = new Timer(() => {
        let updatedInitialCard = 0;
        if (numberOfChildren - this.state.cardsToShow > this.state.initialCard) {
          updatedInitialCard = this.state.initialCard + 1;
        }
        this.setState({
          initialCard: updatedInitialCard,
        });
      }, (autoSlide && duration ? autoSlide + duration : autoSlide));
      this.autoSlider.start();
    }
  }

  componentWillUnmount() {
    typeof window !== 'undefined' && // eslint-disable-line no-unused-expressions
      window.removeEventListener('resize', this.updateResponsiveView);

    if (this.autoSlider) {
      this.autoSlider.pause();
      this.autoSlider = null;
    }
  }

  updateResponsiveView() {
    const { children, hideArrowsOnNoSlides } = this.props;
    let { responsive } = this.props;
    const numberOfChildren = children ? children.length || 1 : 0;
    if (responsive) {
      responsive = responsive.map(obj => Object.assign({}, obj)).sort((key => (a, b) =>
        (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0))('breakPoint')); // eslint-disable-line
      let updatedCardsToShow = this.state.cardsToShow;
      responsive.forEach(({ breakPoint, cardsToShow }) => {
        if (breakPoint <= window.innerWidth) {
          updatedCardsToShow = cardsToShow;
        }
      });
      const updatedInitialCard = (numberOfChildren - updatedCardsToShow) < this.state.initialCard ? (numberOfChildren - updatedCardsToShow) : this.state.initialCard;
      this.setState({
        cardsToShow: updatedCardsToShow,
        childWidth: 100 / updatedCardsToShow,
        initialCard: updatedInitialCard,
        hideArrows: hideArrowsOnNoSlides && numberOfChildren <= updatedCardsToShow,
      });
    }
  }

  changeInitialCard(initialCard) {
    const { afterSlide, beforeSlide } = this.props;
    if (beforeSlide) {
      beforeSlide();
    }
    this.setState({
      initialCard,
    }, () => {
      if (afterSlide) {
        afterSlide();
      }
    });
  }

  handleLeftArrowClick(evt) {
    const { children } = this.props;
    const { cardsToShow } = this.state;
    const childrenCount = children ? children.length : 0;
    if (evt && evt.preventDefault) { evt.preventDefault(); }
    let nextInitialCard = this.state.initialCard - 1;
    if (nextInitialCard < 0) {
      nextInitialCard = childrenCount - cardsToShow;
    }
    this.changeInitialCard(nextInitialCard);
  }

  handleRightArrowClick(evt) {
    const { children } = this.props;
    const { cardsToShow } = this.state;
    const childrenCount = children ? children.length : 0;
    if (evt && evt.preventDefault) { evt.preventDefault(); }
    let nextInitialCard = this.state.initialCard + 1;
    if (childrenCount - cardsToShow < nextInitialCard) {
      nextInitialCard = 0;
    }
    this.changeInitialCard(nextInitialCard);
  }

  renderChildren(children) {
    const { childWidth } = this.state;
    const displayCards = [];
    React.Children.forEach(children, (child, index) => {
      displayCards.push((
        <CardWrapper key={index} width={childWidth}>
          {child}
        </CardWrapper>
      ));
    });
    return displayCards;
  }

  renderDots() {
    const dots = [];
    const { children, Dot } = this.props;
    const numberOfChildren = children ? children.length || 1 : 0;
    let i;
    for (i = 0; i <= numberOfChildren - this.state.cardsToShow; i += 1) {
      const index = i;
      dots.push(React.cloneElement(Dot, {
        active: index === this.state.initialCard,
        key: index,
        onClick: () => this.changeInitialCard(index),
      }));
    }
    return dots;
  }

  renderLeftArrow() {
    const { LeftArrow, infinite } = this.props;
    const { initialCard } = this.state;
    return React.cloneElement(LeftArrow, {
      onClick: this.handleLeftArrowClick,
      disabled: !infinite && !initialCard,
    });
  }

  renderRightArrow() {
    const { RightArrow, children, infinite } = this.props;
    const numberOfChildren = children ? children.length || 1 : 0;
    const { initialCard, cardsToShow } = this.state;
    return React.cloneElement(RightArrow, {
      onClick: this.handleRightArrowClick,
      disabled: !infinite && (initialCard + cardsToShow === numberOfChildren),
    });
  }

  render() {
    const {
      children, cardsToShow,
      duration,
      easing,
      showDots, showArrows,
      pauseOnMouseOver, DotsWrapper,
      ...otherProps
    } = this.props;
    const { initialCard, childWidth } = this.state;
    return (
      <div
        onMouseLeave={() => pauseOnMouseOver && this.autoSlider && this.autoSlider.resume()}
        onMouseEnter={() => pauseOnMouseOver && this.autoSlider && this.autoSlider.pause()}
      >
        <SliderWrapper {...otherProps}>
          {showArrows && !this.state.hideArrows && this.renderLeftArrow()}
          <SliderTrack>
            <SliderList translateX={initialCard * childWidth} duration={duration} easing={easing}>
              {this.renderChildren(children, cardsToShow || children.length)}
            </SliderList>
          </SliderTrack>
          {showArrows && !this.state.hideArrows && this.renderRightArrow()}
        </SliderWrapper>
        <DotsWrapper>
          {showDots && this.renderDots()}
        </DotsWrapper>
      </div>
    );
  }
}

Slider.defaultProps = {
  showDots: true,
  showArrows: true,
  LeftArrow: <DefaultLeftArrow />,
  RightArrow: <DefaultRightArrow />,
  Dot: <DefaultDot />,
  DotsWrapper: DefaultDotsWrapper,
  cardsToShow: null,
  afterSlide: null,
  beforeSlide: null,
  duration: 600,
  easing: 'ease-in-out',
  infinite: true,
  responsive: null,
  autoSlide: 2000,
  pauseOnMouseOver: true,
  padding: '0px 20px',
  margin: '0px',
  hideArrowsOnNoSlides: true,
};

Slider.propTypes = {
  LeftArrow: PropTypes.node,
  RightArrow: PropTypes.node,
  Dot: PropTypes.node,
  showArrows: PropTypes.bool,
  showDots: PropTypes.bool,
  children: PropTypes.node.isRequired,
  cardsToShow: PropTypes.number,
  afterSlide: PropTypes.func,
  beforeSlide: PropTypes.func,
  duration: PropTypes.number,
  easing: PropTypes.string,
  infinite: PropTypes.bool,
  responsive: PropTypes.arrayOf(PropTypes.shape({
    breakPoint: PropTypes.number,
    cardsToShow: PropTypes.number,
  })),
  autoSlide: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  pauseOnMouseOver: PropTypes.bool,
  padding: PropTypes.string,
  margin: PropTypes.string,
  hideArrowsOnNoSlides: PropTypes.bool,
  DotsWrapper: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default Slider;
