import React, { Component, PropTypes } from 'react';

export default class Card extends Component {

  render() {
    const { price, agency, mainImage } = this.props;
    return (
      <div>
        <div style={ { backgroundColor: agency.brandingColors.primary }}>
          <img src={agency.logo}/>
        </div>
        <div>
          <img src={mainImage} />
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
