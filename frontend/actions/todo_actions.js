export const RECEIVE_TODO = 'RECEIVE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const receive_todo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const receive_todos = todos => ({
  type: RECEIVE_TODOS,
  todos
});
