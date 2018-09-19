import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    let text = this.props.todo.done ? 'undo' : 'complete';
    this.state = Object.assign( {}, this.props.todo, {'doneText': text} );

    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    // this.doneText = this.doneText.bind(this);
  }

  handleDelete() {
    this.props.removeTodo(this.props.todo);
  }

  handleToggle() {
    this.state['done'] ?
      this.setState( {done: false, doneText: 'complete'} ) :
      this.setState( {done: true, doneText: 'undo'} );
    console.log(this.state.done);
  }

  render() {
    const { todo } = this.props;

    return (
      <li className="todo-list-item">
        <div className="todo-content">
          <div className="item-title">{ todo.title }</div>
          <div className="item-body">{ todo.body }</div>
        </div>
        <div>
          <button onClick={ this.handleToggle }>{this.state.doneText}</button>
          <button className="delete-bttn" onClick={ this.handleDelete }>🗑️</button>
        </div>
      </li>);
  }
}

export default TodoListItem;
