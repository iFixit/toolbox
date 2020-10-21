import React from 'react';
import { bool, element, func, string, oneOfType } from 'prop-types';
import styled from 'styled-components';

import constants from '../../constants';

const { spacing, fontSize, lineHeight, color, transition } = constants;

const TabContainer = styled.a(
   {
      flex: '0 0 auto',
      display: 'inline-block',
      boxSizing: 'border-box',
      padding: spacing[2],
      marginRight: spacing[2],
      fontSize: fontSize[2],
      fontWeight: 700,
      lineHeight: lineHeight.title,
      textDecoration: 'none',
      color: color.grayAlpha[9],
      borderTop: '3px solid transparent',
      borderBottom: '3px solid transparent',
      transition: `all ${transition.duration} ${transition.easing}`,
      outline: 'none',

      '&:hover': {
         color: color.blue[4],
      },

      '&:focus': {
         borderBottomColor: color.grayAlpha[4],
      },
   },
   ({ active }) =>
      active && {
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
