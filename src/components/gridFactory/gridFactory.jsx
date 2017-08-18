import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import { breakpoint } from '../../constants';

function gridFactory({ gutter = 32 }) {
   const Grid = props => <div {...props} />;

   Grid.Container = glamorous.div(
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

   Grid.Row = glamorous.div(
      {
         display: 'flex',
         flexDirection: 'column',
      },
      ({ children }) => {
         const columns = children.reduce(
            (sum, child) => sum + child.props.span,
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

   Grid.Cell = glamorous.div(
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

   Grid.Cell.propTypes = {
      span: PropTypes.number,
   };

   Grid.Cell.defaultProps = {
      span: 1,
   };

   return Grid;
}

export default gridFactory;
