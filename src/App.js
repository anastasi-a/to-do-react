import React from "react";
import './App.css';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { Filter } from "./utils/Enums";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      allCompleted: false,
      currentFilter: Filter.all
    };
  }

  createTodo = (title) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {id: Date.now(), title, completed: false}
        ]
    }, () => this.checkToggleStatus());
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
            {...item, completed: !item.completed} :
            item
      )
    }, () => this.checkToggleStatus());
  }

  updateTitle = (id, title) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
            {...item, title: title} :
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
    }, () => this.checkToggleStatus());
  }

  removeCompleted = () => {
    this.setState({
      todos: [
        ...this.state.todos.filter(item => !item.completed)
      ]
    });

    this.setState({
      allCompleted: false,
      currentFilter: this.state.currentFilter === Filter.completed ? Filter.all : this.state.currentFilter
    });
  }

  filterTodo = (filterId) => {
    this.setState({
      currentFilter: filterId
    });
  }

  checkToggleStatus = () => {
    this.setState({
      allCompleted:
        this.state.todos.length === 0 || this.state.todos.filter(item => !item.completed).length ? false :
        this.state.todos.length === this.state.todos.filter(item => item.completed).length ? true :
        this.state.allCompleted
    });
  }

  render() {
    return (
      <section className="todoapp">
        <Header
          createTodo={this.createTodo}
        />
        {
          this.state.todos.length > 0 &&
            <TodoList
            todos={this.state.todos}
            allCompleted={this.state.allCompleted}
            currentFilter={this.state.currentFilter}
            toggleTodo={this.toggleTodo}
            updateTitle={this.updateTitle}
            toggleAll={this.toggleAll}
            removeTodo={this.removeTodo}
          />
        }
        {
          this.state.todos.length > 0 &&
            <Footer
              todoCount={this.state.todos.filter(item => !item.completed).length}
              currentFilter={this.state.currentFilter}
              filterTodo={this.filterTodo}
              removeCompleted={this.removeCompleted}
            />
        }
      </section>
    );
  }
}

export default App;
