import React from "react";

class FilterItem extends React.Component {
  render() {
    return (
      <li onClick={() => this.props.filterTodo(this.props.item.id)}>
        <span className={this.props.isActive ? "selected" : ""}>
          {this.props.item.title}
        </span>
      </li>
    )
  }
}

export default FilterItem;
