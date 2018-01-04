import React, { Component } from 'react'

class Todo extends Component{

    render(){
        const className = "undone"
        const todoLink = this.props.done ? "Undone": "Done!!!"
        const todoDelete = this.props.done? "Delete": ""
        return(
            <li className={className}>
                <span>{this.props.id}:</span><br/>
                <span><b>{this.props.title}</b></span><br/>
                <span> {this.props.body}</span><br/>
                <a href="" onClick = { e =>{
                    e.preventDefault()
                    this.props.setTodoState(this.props)
                }}>{todoLink}</a><br/>
                <a href="" onClick = { e =>{
                    e.preventDefault()
                    this.props.deleteTodo(this.props)
                }
                }>{todoDelete}</a>
            </li>
        )
    }
}

export default Todo
