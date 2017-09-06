import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Icon from '../components/Icon/Icon';
import constants from '../constants';

const { color, spacing, transition } = constants;

const ValidityIconContainer = glamorous.div(
   {
      position: 'absolute',
      display: 'flex',
      boxSizing: 'border-box',
      width: `calc(${spacing[3]} * 2)`,
      height: '100%',
      paddingTop: spacing[1],
      top: 0,
      left: 0,
      borderTop: '3px solid transparent',
      borderLeft: '3px solid transparent',
      justifyContent: 'center',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      userSelect: 'none',
      transition: `${transition.duration} ${transition.easing}`,
   },
   ({ showValidity }) => (showValidity ? {
      transform: 'none',
      transitionProperty: 'transform',
   } : {
      transform: 'scale(0)',
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
   onClick: PropTypes.func.isRequired,
   showValidity: PropTypes.bool,
};

export default ValidityIcon;
