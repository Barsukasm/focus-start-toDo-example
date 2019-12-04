import React from 'react';

import Task from '../task/task';

const tasks = [
  { id: 1, title: 'React', completed: true },
  { id: 2, title: 'Props', completed: true },
  { id: 3, title: 'State', completed: false },
  { id: 4, title: 'Lifecycle', completed: false }
];

const TaskList = () => {
  return (
    <div className='tasks-list'>
      {tasks.map((task) => (
        <Task {...task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
