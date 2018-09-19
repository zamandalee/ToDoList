import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.removeTodo(this.props.todo);
  }

  render() {
    return (
      <li className="todo-list-item">
        <div className="todo-content">
          <div className="item-title">{ this.props.todo.title }</div>
          <div className="item-body">{ this.props.todo.body }</div>
        </div>
        <button className="delete-bttn" onClick={ this.handleDelete }>🗑️</button>
      </li>);
  }
}

export default TodoListItem;
