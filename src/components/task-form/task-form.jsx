import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';
import './task-form.scss';
import Locale from '../../locale';

class TaskForm extends React.Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired
  };

  state = { title: '' };

  addTask = (e) => {
    e.preventDefault();
    const { addTask } = this.props;
    const { title } = this.state;

    addTask(title);
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;


    this.setState({
      [name]: value
    });
}

  render() {
    const { title } = this.state;
    const locale = Locale.taskForm;
    return (
      <form className='task-form' onSubmit={this.addTask}>
        <input type='text' name="title" value={title} onChange={this.handleInputChange} />
        <Button label={locale.addButtonLabel} />
      </form>
    );
  }
}

export default TaskForm;
