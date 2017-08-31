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
         width: InvalidIcon.width,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         cursor: 'pointer',
         WebkitTapHighlightColor: 'rgba(0,0,0,0)',
         userSelect: 'none',
      }}
      visibility={props.showInvalid ? 'visible' : 'hidden'}
      onClick={ev => {
         ev.preventDefault();
         props.onClick(ev);
      }}
   >
      <Icon name="alert-circle" size={24} color={color.red[4]} />
   </glamorous.Div>
);

InvalidIcon.width = '42px';

InvalidIcon.defaultProps = {
   showInvalid: false,
   onClick: () => {},
};

InvalidIcon.propTypes = {
   showInvalid: PropTypes.bool,
   onClick: PropTypes.func,
};

export default InvalidIcon;
