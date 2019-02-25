import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'semantic-ui-react';

const ProgressBar = ({ completed }) => (
  <div>
    <Progress percent={completed} indicating size="small" color="black" />
  </div>
);

ProgressBar.prototype = {
  completed: PropTypes.number.isRequired,
};

export default ProgressBar;
