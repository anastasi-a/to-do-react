import React from 'react';
import FilterItem from "./FilterItem";
import { Filter } from "../utils/Enums";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.filterConfig = [
      {id: Filter.all, title: 'All'},
      {id: Filter.active, title: 'Active'},
      {id: Filter.completed, title: 'Completed'}
      ]
  }

  render() {
    return (
      <div>
        <footer className="footer" style={{display: "block"}}>
          <span className="todo-count">
            <strong>{this.props.todoCount}</strong> item left
          </span>
          <ul className="filters">
            {
              this.filterConfig.map(
                item =>
                  <FilterItem
                    key={item.id}
                    isActive={this.props.currentFilter === item.id}
                    item={item}
                    currentFilter={this.props.currentFilter}
                    filterTodo={this.props.filterTodo}
                  />
              )
            }
          </ul>
          <button
            className="clear-completed"
            onClick={this.props.removeCompleted}
          >
            Clear completed
          </button>
        </footer>
      </div>
    );
  }
}

export default Footer;
