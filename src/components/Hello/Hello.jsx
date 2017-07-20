import React from 'react';
import PropTypes from 'prop-types';
import { H1 } from 'glamorous';

import { color, fontSize } from '../../constants';

/**
 * Hello Toolbox!
 */
const Hello = props =>
  <H1 color={color.blue[4]} fontSize={fontSize[2]}>
    Hello {props.message}
  </H1>;

Hello.propTypes = {
  /** Description of prop "message". */
  message: PropTypes.string.isRequired,
};

export default Hello;
