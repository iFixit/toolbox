import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import constants from '../../constants';

const { breakpoint } = constants;

const gridContainerFactory = ({ gutter }) =>
   styled.div(
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
   styled.div(
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
   styled.div(
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

class Grid extends React.Component {
   constructor(props) {
      super(props);

      this.GridContainer = gridContainerFactory({ gutter: props.gutter });
      this.GridRow = gridRowFactory({ gutter: props.gutter });
      this.GridCell = gridCellFactory({ gutter: props.gutter });
   }

   render() {
      const { className, children } = this.props;

      return (
         <div className={className}>
            {children({
               GridContainer: this.GridContainer,
               GridRow: this.GridRow,
               GridCell: this.GridCell,
            })}
         </div>
      );
   }
}

Grid.propTypes = {
   /** A function that returns the contents of the grid. */
   children: PropTypes.func,
   /** Set class name of containing element. */
   className: PropTypes.string,
   /** Space between grid cells. */
   gutter: PropTypes.number,
};

Grid.defaultProps = {
   children: () => {},
   className: '',
   gutter: 32,
};

export default Grid;
