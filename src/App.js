import React from "react"
import TodoItem from "./TodoItem"
import './App.css';
import TodoInput from "./TodoInput";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
  
    handleSubmit(value) {
      this.setState(prevState => {
        let newTodos = prevState.todos
        const idGen = newTodos.length ? newTodos.length + 1: 0
          newTodos.unshift({
          id: idGen + 1,
          text: value,
          completed: false
          })
        return {
          todos: newTodos
        }
      })
    }
  
    handleDelete(item) {
      this.setState(prevState => {
        let filteredTodos = prevState.todos.filter(todo => todo.id !== item.id )
        return {
          todos: filteredTodos
        }
      })
    }
    
    render() {
      const todoItems = this.state.todos.map(item =>
        <TodoItem key={item.id} item={item} handleChange={this.handleChange} handleDelete={this.handleDelete}/>)
        
      return (
          <div className="todo-list">
          <TodoInput handleSubmit={this.handleSubmit} />
          {todoItems}
          </div>
      );    
    }
}

export default App