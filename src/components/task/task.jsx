import React from 'react';
import PropTypes from 'prop-types';

import './task.scss';

const Task = (props) => {
  return (
    <div className={`task ${props.completed ? 'task__completed' : ''}`}>
      {props.title}
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default Task;
