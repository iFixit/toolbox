import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Icon from '../components/Icon/Icon';
import constants from '../constants';

const { color } = constants;

const ValidityIcon = props => (
   <glamorous.Div
      {...{
         position: 'absolute',
         height: '100%',
         width: ValidityIcon.width,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         cursor: 'pointer',
         WebkitTapHighlightColor: 'rgba(0,0,0,0)',
         userSelect: 'none',
      }}
      visibility={props.showValidity ? 'visible' : 'hidden'}
      onClick={ev => {
         ev.preventDefault();
         props.onClick(ev);
      }}
   >
      <Icon
         name={props.valid ? 'check-circle' : 'alert-circle'}
         color={props.valid ? color.green[4] : color.red[4]}
         size={24}
      />
   </glamorous.Div>
);

ValidityIcon.width = '42px';

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
