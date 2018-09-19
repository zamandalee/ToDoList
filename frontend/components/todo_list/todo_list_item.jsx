import React from 'react';

class TodoListItem extends React.Component {
  render() {
    return (
      <li className="todo-list-item">
        <div className="item-title">{ this.props.todo.title }</div>
        <div className="item-body">{ this.props.todo.body }</div>
      </li>);
  }
}

export default TodoListItem;
