import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '../components/Icon/Icon';
import constants from '../constants';

const { color, spacing, transition } = constants;

const ValidityIconColumn = styled.div(
   {
      position: 'absolute',
      display: 'flex',
      boxSizing: 'border-box',
      alignItems: 'flex-start',
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
      fontSize: 0,
   },
   ({ showValidity }) =>
      !showValidity && {
         transitionProperty: 'visibility',
         visibility: 'hidden',
      },
   ({ valid }) =>
      valid && {
         pointerEvents: 'none',
      },
);

const ValidityIconContainer = styled.span(
   {
      transition: `transform ${transition.duration} ${transition.easing}`,
      transformOrigin: 'left center',
   },
   ({ showValidity }) =>
      !showValidity && {
         transform: 'scale(0)',
      },
);

const ValidityIcon = props => (
   <ValidityIconColumn
      showValidity={props.showValidity}
      valid={props.valid}
      onClick={ev => {
         ev.preventDefault();
         props.onClick(ev);
      }}
   >
      <ValidityIconContainer showValidity={props.showValidity}>
         <Icon
            name={props.valid ? 'check-circle' : 'alert-circle'}
            color={props.valid ? color.green[4] : color.red[4]}
            size={20}
         />
      </ValidityIconContainer>
   </ValidityIconColumn>
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
