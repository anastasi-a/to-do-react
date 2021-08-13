import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

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
              this.props.todos.filter(item => this.props.currentFilter === "all" ||
                (this.props.currentFilter === "active" && !item.completed) ||
                (this.props.currentFilter === "completed" && item.completed)).map(
                item =>
                  <TodoItem
                    key={item.id}
                    item={item}
                    toggleTodo={this.props.toggleTodo}
                    removeTodo={this.props.removeTodo}
                  />
              )
            }
          </ul>
      </section>
    );
  }
}

export default TodoList;
