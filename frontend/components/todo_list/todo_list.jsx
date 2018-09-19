import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    const todoItems = this.props.todos.map( todo => (
      <TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo} />
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
import { receiveTodo, receiveTodos } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
