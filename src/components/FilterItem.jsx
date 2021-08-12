import React from "react";

class FilterItem extends React.Component {
  render() {
    return (
      <li onClick={() => this.props.filterTodo(this.props.item)}>
        <span className={
          this.props.currentFilter ===  this.props.item ? "selected" : ""
        }>
          {this.props.item}
        </span>
      </li>
    )
  }
}

export default FilterItem;
