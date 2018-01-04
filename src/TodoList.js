import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  render(){
    if(this.props.isLoading){
      <h3>Loading........</h3>
    }
    if(this.props.hasError){
      <h3>Error........</h3>
    }
    const todos = this.props.todos.map(todo => 
      <Todo key = {todo.id} index={todo.id} {...todo} setTodoState = {this.props.setTodoState} deleteTodo={this.props.deleteTodo}/>
    )

    return(
      <ul>
        {todos}
      </ul>
    )
  }

}

export default TodoList