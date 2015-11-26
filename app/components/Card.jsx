import React, { Component, PropTypes } from 'react';
import styles from 'components/Card.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class Card extends Component {

  render() {
    const { price, agency, mainImage } = this.props;
    return (
      <div className={cx('card', 'card--gray-theme')}>
        <div style={ { backgroundColor: agency.brandingColors.primary }}>
          <img src={agency.logo}/>
        </div>
        <div>
          <img className={styles['card__main-image']} src={mainImage} />
        </div>
        <div>{price}</div>
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
