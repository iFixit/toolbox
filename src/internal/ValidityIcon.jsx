import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Icon from '../components/Icon/Icon';
import constants from '../constants';

const { color, transition, spacing } = constants;

const ValidityIconContainer = glamorous.div(
   {
      position: 'absolute',
      left: 0,
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      userSelect: 'none',
      transition: `${transition.duration} ${transition.easing}`,
      transitionProperty: 'transform',
   },
   ({ validityIconPosition, size }) => validityIconPosition === 'left' && {
      top: 0,
      width: size,
      height: '100%',
      justifyContent: 'center',
   },
   ({ validityIconPosition, size }) => validityIconPosition === 'bottom' && {
      bottom: 0,
      width: '100%',
      height: size,
      justifyContent: 'flex-start',
      padding: `0 ${spacing[3]}`,
   },
   ({ showValidity }) => !showValidity && {
      transform: 'translateX(-100%)',
      transitionProperty: 'transform, visibility',
      visibility: 'hidden',
   },
   ({ valid }) => valid && {
      pointerEvents: 'none',
   },
);

const ValidityIcon = props => (
   <ValidityIconContainer
      showValidity={props.showValidity}
      validityIconPosition={props.validityIconPosition}
      valid={props.valid}
      size={ValidityIcon.size}
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

ValidityIcon.size = '40px';

ValidityIcon.propTypes = {
   showValidity: PropTypes.bool.isRequired,
   valid: PropTypes.bool.isRequired,
   validityIconPosition: PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired,
};

export default ValidityIcon;
