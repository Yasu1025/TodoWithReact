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
      countTodo: 1 // to use as id for todos
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setTodoState = this.setTodoState.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }// End constructor

    fetchData = (dataUrl)=>{
      this.setState({isLoding: true})
      fetch(dataUrl)
        .then(response =>{
          console.log(response)
          if(!response.ok){
            throw Error(response.statusText)
          }
          this.setState({isLoding: true})
          return response
        })
        .then(response => response.json())
        .then((todos)=>{
          this.setState({todos})
          this.setState({countTodo: this.state.todos.length + 1})
          })
        .catch(()=> this.setState({hasError: true}))
    }
  
  componentDidMount(){
    this.fetchData('data.json')
  }


  handleSubmit = (e) => {
     e.preventDefault()
     const title = e.target.title.value
     if(!title){
       alert("Type Title!!")
       return
     }
     const body = e.target.taskBody.value
     const todos = this.state.todos.slice()
     const countTodo = this.state.countTodo

     if(todos.filter(todo => todo.title === title).length){
       alert("There is same todo")
       return
     }

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
    const todo = todos[clickedTodo.index-1]
    todo.done = !todo.done
    todos[clickedTodo.index-1] = todo
    this.setState({todos})
  }

  deleteTodo = clickedTodo =>{
    //const todos = this.state.todos.slice()
    const todos = this.state.todos.filter(todo => todo.id != clickedTodo.id )
    // todos.splice(clickedTodo.index-1, 1)
    // this.setState({todos})
    //todos = todos.filter(todo => todo.id != clickedTodo.id )
    this.setState({todos})
  }


  render(){
    return (
      <div className="app">
        <h1 className="App-title"> To Do App built with react.js</h1>
        <TaskForm handleSubmit = {this.handleSubmit}/>
        <TodoList 
          todos={this.state.todos}
          setTodoState = {this.setTodoState}
          deleteTodo = {this.deleteTodo}
          isLoding = {this.state.isLoding}
          hasError = {this.state.hasError}
          />
      </div>
    );
  }
}

export default App;
