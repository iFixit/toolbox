import React from 'react';
import { arrayOf, bool, node, string } from 'prop-types';
import glamorous, { Div } from 'glamorous';

import Button from '../Button/Button';
import constants from '../../constants';

const { borderRadius } = constants;

const ButtonGroupRowItem = glamorous(Button)({
   borderRadius: 0,
   borderRightWidth: 0,

   '&:first-of-type': {
      borderTopLeftRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
   },
   '&:last-of-type': {
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      borderRightWidth: 1,
   },
});

const ButtonGroupColumnItem = glamorous(Button)({
   borderRadius: 0,
   borderBottomWidth: 0,

   '&:first-of-type': {
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
   },
   '&:last-of-type': {
      borderBottomLeftRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      borderBottomWidth: 1,
   },
});

const ButtonGroup = ({ children, disabled, direction, ...props }) => (
   <Div display="flex" flexDirection={direction} {...props}>
      {React.Children.map(children, child => {
         if (child.type !== Button) {
            return child;
         }
         return direction === 'row' ? (
            <ButtonGroupRowItem
               {...child.props}
               disabled={disabled || child.props.disabled}
            />
         ) : (
            <ButtonGroupColumnItem
               {...child.props}
               disabled={disabled || child.props.disabled}
            />
         );
      })}
   </Div>
);

ButtonGroup.propTypes = {
   /** Buttons to be grouped together. */
   children: arrayOf(node).isRequired,
   /** Indicated whether button group should display in as a row or
    * stacked in a column */
   direction: string,
   /** Indicates that the control is not available for interaction */
   disabled: bool,
};

ButtonGroup.defaultProps = {
   disabled: false,
   direction: 'row',
};

export default ButtonGroup;
