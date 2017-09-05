import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Icon from '../components/Icon/Icon';
import constants from '../constants';

const { color, transition, spacing } = constants;

const ValidityIconContainer = glamorous.div(
   {
      position: 'absolute',
      boxSizing: 'border-box',
      left: 0,
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      userSelect: 'none',
      transition: `${transition.duration} ${transition.easing}`,
   },
   ({ validityIconPosition }) => validityIconPosition === 'left' && {
      top: 0,
      width: `calc(${spacing[3]} * 2)`,
      height: '100%',
      justifyContent: 'center',
      transform: 'scale(0)',
   },
   ({ showValidity }) => (showValidity ? {
      transform: 'none',
      transitionProperty: 'transform',
   } : {
      transitionProperty: 'transform, visibility',
      visibility: 'hidden',
   }),
   ({ valid }) => valid && {
      pointerEvents: 'none',
   },
);

const ValidityIcon = props => (
   <ValidityIconContainer
      showValidity={props.showValidity}
      validityIconPosition={props.validityIconPosition}
      valid={props.valid}
      onClick={ev => {
         ev.preventDefault();
         props.onClick(ev);
      }}
   >
      <Icon
         name={props.valid ? 'check-circle' : 'alert-circle'}
         color={props.valid ? color.green[4] : color.red[4]}
         size={20}
      />
   </ValidityIconContainer>
);

ValidityIcon.defaultProps = {
   showValidity: false,
};

ValidityIcon.propTypes = {
   valid: PropTypes.bool.isRequired,
   validityIconPosition: PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired,
   showValidity: PropTypes.bool,
};

export default ValidityIcon;
