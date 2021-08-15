import React from "react";
import TodoItem from "./TodoItem";
import { Filter } from "../utils/Enums";

class TodoList extends React.Component {
  filterTodo = () => {
    switch (this.props.currentFilter) {
      case Filter.active:
        return this.props.todos.filter(item => !item.completed);
      case Filter.completed:
        return this.props.todos.filter(item => item.completed);
      default:
        return this.props.todos;
    }
  }

  render() {
    return(
      <section className="main">
        <input id="toggle-all"
               className="toggle-all"
               type="checkbox"
               checked={this.props.allCompleted}
               onChange={(e) => {this.props.toggleAll(!this.props.allCompleted)}}
        />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {
              this.filterTodo().map(
                item =>
                  <TodoItem
                    key={item.id}
                    item={item}
                    toggleTodo={this.props.toggleTodo}
                    removeTodo={this.props.removeTodo}
                    updateTitle={this.props.updateTitle}
                  />
              )
            }
          </ul>
      </section>
    );
  }
}

export default TodoList;
