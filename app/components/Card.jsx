import React, { Component, PropTypes } from 'react';
import styles from 'components/Card.scss';
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
  }

  handleMouseOver(evt) {
    this.setState({
      isHover: true
    });
  }

  handleMouseOut(evt) {
    this.setState({
      isHover: false
    });
  }

  render() {
    const { price, agency, mainImage } = this.props;
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
          <button onClick={evt=> { console.log(evt) }} className={cx('card__button')}>Add Property</button>
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
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  agency: PropTypes.object.isRequired,
  mainImage: PropTypes.string.isRequired
};
