import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import { breakpoint } from '../../constants';

const formContainerFactory = ({ gutter }) =>
   glamorous.div(
      {
         display: 'flex',
         flexDirection: 'column',
         margin: `-${gutter / 2}px 0`,
      },
      {
         [breakpoint.sm]: {
            '@supports (display: grid)': {
               display: 'grid',
               gridGap: gutter,
               margin: 0,
            },
         },
      },
   );

const formGroupFactory = ({ gutter }) =>
   glamorous.div(
      {
         display: 'flex',
         flexDirection: 'column',
      },
      ({ children }) => {
         const columns = children.reduce(
            (sum, child) => sum + (child.props.span || 1),
            0,
         );

         return {
            [breakpoint.sm]: {
               '@supports (display: grid)': {
                  display: 'grid',
                  gridGap: gutter,
                  gridTemplateColumns: `repeat(${columns}, 1fr)`,
               },
            },
         };
      },
   );

const formFieldFactory = ({ gutter }) =>
   glamorous.div(
      {
         margin: `${gutter / 2}px 0`,
      },
      ({ span = 1 }) => ({
         [breakpoint.sm]: {
            '@supports (display: grid)': {
               gridColumnStart: `span ${span}`,
               margin: 0,
            },
         },
      }),
   );

const FormLayout = ({ children, gutter }) =>
  <div>
    {children({
       FormContainer: formContainerFactory({ gutter }),
       FormGroup: formGroupFactory({ gutter }),
       FormField: formFieldFactory({ gutter }),
    })}
  </div>;

FormLayout.propTypes = {
   /** A function that returns the contents of the form */
   children: PropTypes.func,
   /** Space between form fields */
   gutter: PropTypes.number,
};

FormLayout.defaultProps = {
   children: () => {},
   gutter: 32,
};

export default FormLayout;
