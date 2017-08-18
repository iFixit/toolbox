import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import { breakpoint } from '../../constants';

const gridContainerFactory = ({ gutter }) =>
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

const gridRowFactory = ({ gutter }) =>
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

const gridCellFactory = ({ gutter }) =>
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

const Grid = ({ className, children, gutter }) =>
  <div className={className}>
    {children({
       GridContainer: gridContainerFactory({ gutter }),
       GridRow: gridRowFactory({ gutter }),
       GridCell: gridCellFactory({ gutter }),
    })}
  </div>;

Grid.propTypes = {
   /** A function that returns the contents of the grid */
   children: PropTypes.func,
   /** Set class name of containing element. */
   className: PropTypes.string,
   /** Space between grid cells */
   gutter: PropTypes.number,
};

Grid.defaultProps = {
   children: () => {},
   className: '',
   gutter: 32,
};

export default Grid;
