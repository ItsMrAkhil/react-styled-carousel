import React from 'react';
import SliderWrapper from './SliderWrapper';
import CardWrapper from './CardWrapper';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Container from './Container';

class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.changeInitialCard = this.changeInitialCard.bind(this);
    this.state = { initialCard: 0 };
  }

  changeInitialCard(cardIndex) {
    this.setState({
      initialCard: cardIndex,
    });
  }

  handleLeftArrowClick(evt) {
    const { children, cardsToShow } = this.props;
    const childrenCount = children ? children.length : 0;
    if (evt && evt.preventDefault) { evt.preventDefault() }
    let nextInitialCard = this.state.initialCard - 1;
    if (0 > nextInitialCard) {
      nextInitialCard = childrenCount - cardsToShow;
    }
    this.changeInitialCard(nextInitialCard);
  }

  handleRightArrowClick(evt) {
    const { children, cardsToShow } = this.props;
    const childrenCount = children ? children.length : 0;
    if (evt && evt.preventDefault) { evt.preventDefault() }
    let nextInitialCard = this.state.initialCard + 1;
    if (childrenCount - cardsToShow < nextInitialCard) {
      nextInitialCard = 0;
    }
    this.changeInitialCard(nextInitialCard);
  }

  renderChildren(children, cardsToShow) {
    let childrenCount = cardsToShow || (children ? children.length || 1 : 1);
    const childWidth = `${100 / childrenCount}%`;
    const { initialCard } = this.state;
    const displayCards = [];
    React.Children.forEach(children, (child, index) => {
      if (initialCard + cardsToShow >= index + 1 && initialCard <= index) {
        displayCards.push((
          <CardWrapper key={index} width={childWidth}>
            {child}
          </CardWrapper>
        ));
      }
    });
    return displayCards;
  }

  render() {
    const { children, cardsToShow, ...otherProps } = this.props;
    return (
      <SliderWrapper {...otherProps}>
        <LeftArrow onClick={this.handleLeftArrowClick} />
        {this.renderChildren(children, cardsToShow || children.length)}
        <RightArrow onClick={this.handleRightArrowClick} />
      </SliderWrapper>
    );
  }
}

export default Slider;
