import React from 'react';
import FilterItem from "./FilterItem";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.filterList = ["all", "active", "completed"];
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <span className="todo-count">
            <strong>{this.props.todoCount}</strong> item left
          </span>
          <ul className="filters">
            {
              this.filterList.map(
                item =>
                  <FilterItem
                    key={item}
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
