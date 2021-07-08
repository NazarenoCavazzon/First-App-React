import Tasks from "./components/Tasks";
import TaskList from "./sample/TaskList.json"
import React, {Component} from "react";
import AddTask from "./components/AddTask"

class App extends Component {

  state = {
    TaskList: TaskList
  }

  newTask = (title, description) => {
    const newtask = {
      Title: title,
      Description: description,
      id: (this.state.TaskList).length,
      Done: false,
    }
    this.setState({
      TaskList: [...this.state.TaskList, newtask]
    })
  }

  deleteTask = (id) => {
    const deletedList = this.state.TaskList.filter(task => task.id !== id);
    this.setState({TaskList: deletedList})
  }

  checkDone = (id) => {
    const checkedList = this.state.TaskList.map(task => {
      if(task.id === id){
        task.Done = !task.Done
      }
      return task;
    });
    this.setState({TaskList: checkedList})
  }
  render() {
    return <div className="main">
      <div className="navbar">

      </div>
      <div className="container">
        <h1>{}</h1>
        <Tasks tasks= {this.state.TaskList} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
        <AddTask newTask ={this.newTask}/>
      </div>
    </div>
  }
}

export default App;
