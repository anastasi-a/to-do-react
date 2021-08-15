import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    // this.interval = null;

    this.state = {
      isEditing: false,
      value: "",
      count: 0
    }
  }

  editHandler = () => {
    this.setState({
      isEditing: true,
      value: this.props.item.title
    })
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  saveChanges = () => {
    this.setState({isEditing: false});
    this.props.updateTitle(this.props.item.id, this.state.value);
  }

  // old way to check if component should be updated,
  // instead of it React.PureComponent is used
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return nextProps.item.completed !== this.props.item.completed;
  // }

  componentDidMount() {
    console.log("componentDidMount");
    // this.interval = setInterval(() => {
    //   this.setState({count: this.state.count + 1})
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    // clearInterval(this.interval);
  }

  render() {
    if (this.state.isEditing) {
      return(
        <li className="editing">
          <input
            autoFocus={true}
            className="edit"
            value={this.state.value}
            onChange={this.onChange}
            onBlur={this.saveChanges}
          />
        </li>
      );
    }
    return(
      <li className={this.props.item.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.item.completed}
            onChange={() => this.props.toggleTodo(this.props.item.id)}
          />
          <label onDoubleClick={this.editHandler}>
            {this.props.item.title}
          </label>
          <button
            className="destroy"
            onClick={() => this.props.removeTodo(this.props.item.id)}
          >
          </button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
