import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import TodoList from './TodoList'
import TaskForm from './Form'
import Form from './Form'

class App extends Component {

  constructor(){
    super()
    const todos = []

    this.state = {
      isLoding: false,
      hasError: false,
      todos: todos,
      countTodo: todos.length+1 // to use as id for todos
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.setTodoState = this.setTodoState.bind(this)
  }// End constructor

  handleSubmit = (e) => {
     e.preventDefault()
     const title = e.target.title.value
     const body = e.target.taskBody.value
     const todos = this.state.todos.slice()
     const countTodo = this.state.countTodo

     todos.push({
       id: countTodo,
       title: title,
       body: body,
       done:false
     })

     this.setState({todos: todos})
     this.setState({countTodo: countTodo+1})

     e.target.title.value = ""
     e.target.taskBody.value = ""
  }

  setTodoState = clickedTodo => {
    const todos = this.state.todos.slice()
    const todo = todos[clickedTodo.id - 1]
    todo.done = !todo.done
    todos[clickedTodo.id - 1] = todo
    this.setState({todos: todos})

  }


  render(){
    return (
      <div className="app">
        <h1 className="App-title"> To Do App built with react.js</h1>
        <TaskForm handleSubmit = {this.handleSubmit}/>
        <TodoList todos={this.state.todos} setTodoState = {this.setTodoState}/>
      </div>
    );
  }
}

export default App;
