import React, { Component } from 'react'

class TaskFrom extends Component{
    render(){
        return(
            <div className="task_form">
                <form onSubmit = {this.props.handleSubmit}>
                    <input name="title" type="text" placeholder="Input Task Title"/><br/>
                    <textarea name="taskBody" placeholder="describe Your Task"></textarea><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default TaskFrom