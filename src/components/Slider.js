import React from 'react';
import PropTypes from 'prop-types';

import SliderTrack from './SliderTrack';
import CardWrapper from './CardWrapper';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Container from './Container';
import SliderWrapper from './SliderWrapper';
import SliderList from './SliderList';
import Dots from './Dots';
import Dot from './Dot';

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
    this.state = { initialCard: 0, childWidth: 0, cardsToShow: 0 };
  }

  componentDidMount() {
    const { children } = this.props;
    const { cardsToShow } = this.props;
    let childrenCount = cardsToShow || (children ? children.length || 1 : 1);
    const childWidth = 100 / childrenCount;
    this.setState({
      childWidth,
      cardsToShow: childrenCount,
    });
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
    if (evt && evt.preventDefault) { evt.preventDefault() }
    let nextInitialCard = this.state.initialCard - 1;
    if (0 > nextInitialCard) {
      nextInitialCard = childrenCount - cardsToShow;
    }
    this.changeInitialCard(nextInitialCard);
  }

  handleRightArrowClick(evt) {
    const { children } = this.props;
    const { cardsToShow } = this.state;
    const childrenCount = children ? children.length : 0;
    if (evt && evt.preventDefault) { evt.preventDefault() }
    let nextInitialCard = this.state.initialCard + 1;
    if (childrenCount - cardsToShow < nextInitialCard) {
      nextInitialCard = 0;
    }
    this.changeInitialCard(nextInitialCard);
  }

  renderChildren(children) {
    const { initialCard, childWidth } = this.state;
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
    const { children } = this.props;
    const numberOfChildren = children ? children.length || 1 : 0;
    let i;
    for (i = 0; i <= numberOfChildren - this.state.cardsToShow; i += 1) {
      const index = i;
      dots.push(
        <Dot
          active={index === this.state.initialCard}
          key={i}
          onClick={() => this.changeInitialCard(index)}
        />
      );
    }
    return dots;
  }

  renderLeftArrow() {
    const { LeftArrow: PropLeftArrow } = this.props;
    if (PropLeftArrow) {
      return React.cloneElement(PropLeftArrow, {
        onClick: this.handleLeftArrowClick,
      });
    }
    return <LeftArrow onClick={this.handleLeftArrowClick}/>
  }

  renderRightArrow() {
    const { RightArrow: PropRightArrow } = this.props;
    if (PropRightArrow) {
      return React.cloneElement(PropRightArrow, {
        onClick: this.handleRightArrowClick,
      });
    }
    return <RightArrow onClick={this.handleRightArrowClick}/>
  }

  render() {
    const { children, cardsToShow, showDots, showArrows, ...otherProps } = this.props;
    const { initialCard, childWidth } = this.state;
    return (
      <React.Fragment>
        <SliderWrapper {...otherProps}>
          {showArrows && this.renderLeftArrow()}
          <SliderTrack>
            <SliderList translateX={initialCard * childWidth}>
              {this.renderChildren(children, cardsToShow || children.length)}
            </SliderList>
          </SliderTrack>
          {showArrows && this.renderRightArrow()}
        </SliderWrapper>
        <Dots>
          {showDots && this.renderDots()}
        </Dots>
      </React.Fragment>
    );
  }
}

Slider.defaultProps = {
  showDots: true,
  showArrows: true,
}

Slider.propTypes = {
  LeftArrow: PropTypes.node,
}

export default Slider;
