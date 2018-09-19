import merge from 'lodash/merge';
import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'study History of Magic',
    body: 'ask Hermione to explain Goblin Rebellion, borrow notes, finish essay',
    done: false
  },
  2: {
    id: 2,
    title: 'Potions essay',
    body: 'review use of moonstones pg 175, look at notes on properties',
    done: true
  },
  3: {
    id: 3,
    title: 'quidditch tryouts',
    body: 'send out notice on Leeway #general channel, book pitch, borrow school brooms',
    done: true
  },
  4: {
    id: 4,
    title: 'visit Hagrid',
    body: 'go down to Hagrid\'s hut after quidditch tryouts',
    done: true
  },
  5: {
    id: 5,
    title: 'detention',
    body: 'go to Snape\'s office',
    done: true
  },
  6: {
    id: 6,
    title: 'meeting with Dumbledore',
    body: 'office password is cockroad cluster, 9pm on Tuesday',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach( todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    case RECEIVE_TODO:
      return merge( {}, state, {[action.todo.id]: action.todo} );
    case REMOVE_TODO:
      nextState = merge( {}, state );
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;
