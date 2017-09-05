import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Icon from '../components/Icon/Icon';
import constants from '../constants';

const { color, transition } = constants;

const ValidityIconContainer = glamorous.div(
   {
      position: 'absolute',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      userSelect: 'none',
      transition: `${transition.duration} ${transition.easing}`,
      transitionProperty: 'transform',
   },
   ({ showValidity }) => !showValidity && {
      transform: 'translateX(-100%)',
      transitionProperty: 'transform, visibility',
      visibility: 'hidden',
   },
   ({ valid }) => valid && {
      pointerEvents: 'none',
   },
   ({ width }) => width && { width },
);

const ValidityIcon = props => (
   <ValidityIconContainer
      showValidity={props.showValidity}
      valid={props.valid}
      width={ValidityIcon.size}
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

ValidityIcon.defaultProps = {
   showValidity: false,
   valid: true,
   onClick: () => {},
};

ValidityIcon.propTypes = {
   showValidity: PropTypes.bool,
   valid: PropTypes.bool,
   onClick: PropTypes.func,
};

export default ValidityIcon;
