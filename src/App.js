import React from "react";
import './App.css';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      allCompleted: false,
      currentFilter: "all"
    };
  }

  createTodo = (title) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {id: Date.now(), title, completed: false}
        ]
    });
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
            {...item, completed: !item.completed} :
            item
      )
    });
  }

  toggleAll = (isCompleted) => {
    this.setState({
      todos: this.state.todos.map(
        item => {
          return {...item, completed: isCompleted}
        }),
      allCompleted: isCompleted
    });
  }

  removeTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(item => item.id !== id)
      ]
    })
  }

  filterTodo = (filter) => {
    this.setState({
      currentFilter: filter
    });
  }

  render() {
    return (
      <section className="todoapp">
        <Header
          createTodo={this.createTodo}
        />
        <TodoList
          todos={this.state.todos}
          allCompleted={this.state.allCompleted}
          currentFilter={this.state.currentFilter}
          toggleTodo={this.toggleTodo}
          toggleAll={this.toggleAll}
          removeTodo={this.removeTodo}
        />
        <Footer
          todoCount={this.state.todos.length}
          currentFilter={this.state.currentFilter}
          filterTodo={this.filterTodo}
        />
      </section>
    );
  }
}

export default App;
