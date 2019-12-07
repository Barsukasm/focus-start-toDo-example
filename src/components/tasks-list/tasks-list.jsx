import React from 'react';

import Task from '../task';
import Button from '../button';
import Locale from '../../locale';
import TaskForm from '../task-form';

const tasks = [
  { id: 1, title: 'React', completed: true },
  { id: 2, title: 'Props', completed: true },
  { id: 3, title: 'State', completed: false },
  { id: 4, title: 'Lifecycle', completed: false }
];

class TaskList extends React.Component {
  state = {
    tasks
  };

  filterActive = () => {
    const activeTasks = this.state.tasks.filter((task) => !task.completed);
    this.setState({ tasks: activeTasks });
  };

  toggleCompleted = (event) => {
    const { tasks } = this.state;
    const id = Number(event.target.dataset.id);

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    this.setState({ tasks: updatedTasks });
  };

  addTask = (title) => {
    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks,
        { id: Math.random(), title, completed: false }
      ]
    }));
  };

  render() {
    const locale = Locale.tasksList;

    return (
      <div className='tasks-list'>
        <TaskForm addTask={this.addTask} />
        {this.state.tasks.map(({ title, completed, id }) => (
          <Task
            title={title}
            completed={completed}
            id={id}
            key={id}
            toggleCompleted={this.toggleCompleted}
          />
        ))}
        <Button label={locale.filterActive} onClick={this.filterActive} />
      </div>
    );
  }
}

export default TaskList;
