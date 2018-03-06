import React from 'react';
import { arrayOf, bool, node } from 'prop-types';
import glamorous from 'glamorous';

import Button from '../Button/Button';
import constants from '../../constants';

const { borderRadius } = constants;
const { Div } = glamorous;

const ButtonGroupItem = glamorous(Button)({
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

const ButtonGroup = ({ children, disabled, ...props }) => (
   <Div display="inline-block" {...props}>
      {React.Children.map(children, child => {
         if (child.type !== Button) {
            return child;
         }
         return <ButtonGroupItem {...child.props} disabled={disabled} />;
      })}
   </Div>
);

ButtonGroup.propTypes = {
   /** Buttons to be grouped together. */
   children: arrayOf(node).isRequired,
   /** Indicates that the control is not available for interaction */
   disabled: bool,
};

ButtonGroup.defaultProps = {
   disabled: false,
};

export default ButtonGroup;
