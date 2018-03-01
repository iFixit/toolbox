import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import Button from '../Button/Button';
import constants from '../../constants';

const { borderRadius } = constants;

const ButtonGroupContainer = glamorous.div({
   display: 'inline-block',
});

const GroupedButton = glamorous(Button)({
   borderRadius: 0,

   '&:first-of-type': {
      borderTopLeftRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
   },
   '&:last-of-type': {
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
   },
});

const ButtonGroup = ({
   className,
   disabled,
   onMouseEnter,
   onMouseLeave,
   children,
}) => (
   <ButtonGroupContainer
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
   >
      {React.Children.map(children, child => {
         if (child.type !== Button) {
            return child;
         }
         return (
            <GroupedButton
               disabled={disabled}
               {...child.props}
            />
         );
      })}
   </ButtonGroupContainer>
);

ButtonGroup.propTypes = {
   /** Set class name of containing element. */
   className: PropTypes.string,
   /** Indicates that the control is not available for interaction */
   disabled: PropTypes.bool,
   /** Callback when mouse enters component. */
   onMouseEnter: PropTypes.func,
   /** Callback when mouse leaves component. */
   onMouseLeave: PropTypes.func,
};

ButtonGroup.defaultProps = {
   className: '',
   disabled: false,
   onMouseEnter: () => {},
   onMouseLeave: () => {},
};

export default ButtonGroup;
