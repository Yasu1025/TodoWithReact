import React, { Component } from 'react'

class Todo extends Component{

    render(){
        const className = "undone"
        const taskLink = this.props.done ? "Resume": "Done!!!"
        return(
            <li className={className}>
                <span>{this.props.id}</span>
                <span>: {this.props.title}</span>
                <a href="" onClick = {(e)=>{
                    e.preventDefault()
                    this.props.setTodoState(this.props)
                }}>{taskLink}</a>
                <span>{this.props.body}</span>
            </li>
        )
    }
}

export default Todo
