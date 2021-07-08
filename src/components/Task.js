import React, { Component } from 'react'

export default class Task extends Component {
    render() {
        const {task} = this.props;
        return (
            <div className="task">
                <div className="inner-task-title">
                    <h1 className="taskTitle">{task.Title}</h1>
                </div>
                <div className="inner-task-description">
                    <p className="taskDescription">{task.Description}</p>
                    <div className="inner-task-state">
                        <div className="input-group mb-3">
                            <div className="form-check form-switch" style={{"margin": "auto"}}>
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked={task.Done} onChange={this.props.checkDone.bind(this, task.id)}/>
                            </div>
                            <input type="text" className="form-control" aria-label="Text input with checkbox" value={task.Done ? "Done" : "Donen't"} disabled tabIndex="-1" style={{"backgroundColor":"white", "borderRadius": "5px"}}/>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto" style={{"paddingBottom":"10px"}}>
                        <button type="button" className="btn btn-danger" onClick={this.props.deleteTask.bind(this, task.id)} >Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
