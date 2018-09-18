import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

import {receiveTodo, receiveTodos} from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;

  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
