import React from "react";
import TodoItem from "./TodoItem";
import "./App.css";
import TodoInput from "./TodoInput";
import Buttons from "./Buttons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      type: "All"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleButtons = this.handleButtons.bind(this);
    this.handleCheckAll = this.handleCheckAll.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  handleCheckAll() {
    this.setState(prevState => {
      const newTodos = [...prevState.todos];
      if (newTodos.every(todo => todo.completed)) {
        newTodos.map(todo => {
          todo.completed = !todo.completed
          return todo
        })
      } else if (newTodos.some(todo => !todo.completed)) {
        newTodos.map(todo => {
          todo.completed = true
          return todo
        })
      }

      return {
        todos: newTodos
      }
    })
  }

  handleSubmit(value) {
    this.setState(
      prevState => {
        const newTodos = [...prevState.todos];
        const idGen = Date.now();
        newTodos.unshift({
          id: idGen,
          text: value,
          completed: false,
          hidden: false
        });
        return {
          todos: newTodos
        };
      },
      () => this.handleButtons(this.state.type)
    );
  }

  handleDelete(item) {
    this.setState(prevState => {
      const filteredTodos = prevState.todos.filter(todo => todo.id !== item.id);
      return {
        todos: filteredTodos
      };
    });
  }

  handleButtons(type) {
    this.setState(prevState => {
      const updatedTodos = [...prevState.todos];

      if (type === "All") {
        updatedTodos.map(todo => {
          todo.hidden = false;

          return todo;
        });
      } else if (type === "Active") {
        updatedTodos.map(todo => {
          if (todo.completed === true) {
            todo.hidden = true;
          } else {
            todo.hidden = false;
          }

          return todo;
        });
      } else if (type === "Completed") {
        updatedTodos.map(todo => {
          if (todo.completed === true) {
            todo.hidden = false;
          } else {
            todo.hidden = true;
          }

          return todo;
        });
      }
      
      return {
        todos: updatedTodos,
        type
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange}
        handleDelete={this.handleDelete}
      />
    ));

    return (
      <div className="todo-list">
        <Buttons
          todos={this.state.todos}
          handleButtons={this.handleButtons}
          handleCheckAll={this.handleCheckAll} />
        <TodoInput handleSubmit={this.handleSubmit} />
        {todoItems}
      </div>
    );
  }
}

export default App;
