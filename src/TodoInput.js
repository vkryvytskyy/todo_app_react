import React, {Component} from 'react'

class TodoInput extends Component {
  constructor () {
    super()
    this.state = {
      value : ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <input
        type='text'
        placeholder='What needs to be done?'
        className="todo-input"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            this.props.handleSubmit(this.state.value)
            this.setState({value : ''})
          }
        } 
        }
      >
      </input>
    )
  }
}

export default TodoInput