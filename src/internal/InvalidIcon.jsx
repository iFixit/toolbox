import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Icon from '../components/Icon/Icon';
import constants from '../constants';

const { color } = constants;

const InvalidIcon = props => (
   <glamorous.Div
      {...{
         position: 'absolute',
         height: '100%',
         width: '42px',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         cursor: 'pointer',
         WebkitTapHighlightColor: 'rgba(0,0,0,0)',
         userSelect: 'none',
      }}
      onClick={ev => {
         ev.preventDefault();
         props.onClick(ev);
      }}
   >
      <Icon name="alert-circle" size={24} color={color.red[4]} />
   </glamorous.Div>
);

InvalidIcon.defaultProps = {
   onClick: () => {},
};

InvalidIcon.propTypes = {
   onClick: PropTypes.func,
};

export default InvalidIcon;
