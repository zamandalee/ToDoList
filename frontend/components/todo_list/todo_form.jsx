import React from 'react';
import { uniqueId } from '../../util/utils';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", done: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState( {[field]: e.target.value} );
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = Object.assign( {}, this.state, {id: uniqueId()} );
    this.props.createTodo(newTodo).then(
      () => this.setState({title: '', body: ''})
    );

    this.setState({ title: "", body: "", done: false });
  }

  render() {
    return (
      <div className="new-todo">
        <h2>New Todo</h2>
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <label>Title
            <br/>
            <input className="title-input"
                   type="text"
                   placeholder="buy sweets"
                   value={this.state.title}
                   onChange={this.update('title')}
                   required/>
          </label>

          <label>Notes
            <br/>
            <textarea className="body-input"
                      placeholder="at Honeyduke's in Hogsmeade: sugar quills, pumpkin pasties, licorice wands, and Bertie Bott's Every Flavor Beans"
                      value={this.state.body}
                      onChange={this.update('body')}
                      required></textarea>
          </label>

          <button className="todo-create-bttn">Create Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
