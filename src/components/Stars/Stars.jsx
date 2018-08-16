import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import constants from '../../constants';

const { color } = constants;
const { string, number, func } = PropTypes;

const Stars = ({
   activeColor,
   count,
   inactiveColor,
   onChange,
   rating,
   size,
   spacing,
}) => (
   <StarRatings
      rating={rating}
      numberOfStars={count}
      changeRating={onChange && onChange}
      starDimension={`${size}px`}
      starEmptyColor={inactiveColor}
      starHoverColor={activeColor}
      starRatedColor={activeColor}
      starSpacing={`${spacing}px`}
   />
);

Stars.propTypes = {
   /** The rating. */
   rating: number.isRequired,
   /** The color of each active star. */
   activeColor: string,
   /** The number of total stars. */
   count: number,
   /** The color of each inactive star. */
   inactiveColor: string,
   /** Size in px of each star */
   size: number,
   /** Spacing in px between each star */
   spacing: number,
   /** Callback when a star is clicked. */
   onChange: func,
};

Stars.defaultProps = {
   activeColor: color.yellow[4],
   count: 5,
   inactiveColor: color.gray[3],
   size: 40,
   spacing: 0,
   onChange: null,
};

export default Stars;
