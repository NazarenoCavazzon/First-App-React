import React, { Component } from 'react'

export default class AddTask extends Component {

    state = {
        title: "",
        description: "",
    }

    onSubmit = e => {
        this.props.newTask(this.state.title, this.state.description)
        this.setState({
            title: "",
            description: "",
        })
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="task">
                    <h1 className="inner-task-title" style={{"textAlign": "center", "margin": "0px", "paddingBottom": "10px", "fontWeight": "bold"}}>Add Task</h1>
                    <div className="inner-task-description">
                        <div className="input-text-newtask">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Description</b></label>
                            <textarea className="form-control" name="description" id="exampleFormControlTextarea1" rows="3" required onChange={this.onChange} value={this.state.description}></textarea>
                        </div>
                        <div className="input-group mb-3">
                            <button className="btn btn-success" type="submit" id="button-addon1" style={{"margin":"0px"}}>Upload</button>
                            <input type="text" name="title" className="form-control" placeholder="Title"  onChange={this.onChange} value={this.state.title} required/>
                        </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
