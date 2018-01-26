import React from 'react';
import { bool, element, func, string, oneOfType } from 'prop-types';
import glamorous from 'glamorous';

import constants from '../../constants';

const { spacing, fontSize, lineHeight, color } = constants;

const TabContainer = glamorous.a(
   {
      flex: '0 0 auto',
      display: 'inline-block',
      boxSizing: 'border-box',
      padding: `${spacing[3]} ${spacing[1]}`,
      marginRight: spacing[3],
      fontSize: fontSize[2],
      fontWeight: 700,
      lineHeight: lineHeight.title,
      textDecoration: 'none',
      color: color.grayAlpha[9],
      borderBottomWidth: 3,
      borderBottomStyle: 'solid',
      borderBottomColor: 'transparent',

      '&:hover': {
         color: color.blue[4],
      },
   },
   ({ active }) => active && {
      color: color.blue[4],
      borderBottomColor: color.blue[4],
   },
);

const Tab = ({ is, ...props }) => {
   const Component = TabContainer.withComponent(is);
   return <Component {...props} />;
};

Tab.propTypes = {
   active: bool,
   /** HTML element string or React component to render */
   is: oneOfType([string, func, element]),
};

Tab.defaultProps = {
   active: false,
   is: 'a',
};

export default Tab;
