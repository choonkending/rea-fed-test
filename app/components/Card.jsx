import React, { Component, PropTypes } from 'react';
import styles from './Card.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
    
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleMouseOver() {
    this.setState({
      isHover: true
    });
  }

  handleMouseOut() {
    this.setState({
      isHover: false
    });
  }

  handleClick(evt) {
    // index refers to the position of the property within the array
    // of the redux store
    // it is NOT the id of the property
    this.props.handleClick(this.props.index);
  }

  render() {
    const { price, agency, mainImage, buttonText } = this.props;
    const { isHover } = this.state;
    return (
      <div className={cx(
        'card', 
        'card--gray-theme')}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}>
        <div className={cx('card__overlay', {
          'card__overlay--visible': isHover
        })}>
          <button onClick={this.handleClick} className={cx('card__button')}>{buttonText}</button>
        </div>
        <div style={ { backgroundColor: agency.brandingColors.primary }}>
          <img className={cx('card__agency-logo')} src={agency.logo}/>
        </div>
        <div>
          <img className={cx('card__main-image')} src={mainImage} />
        </div>
        <div className={cx('card__price')}>{price}</div>
      </div>
    );
  }

}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  agency: PropTypes.object.isRequired,
  mainImage: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};
