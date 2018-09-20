import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const todoItems = this.props.todos.map( todo => (
      <TodoListItem key={todo.id} todo={todo} removeTodo={this.props.removeTodo} />
    ));

    return (
      <div className="content">
        <ul className="todo-list">
          {todoItems}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, removeTodo, fetchTodos } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
