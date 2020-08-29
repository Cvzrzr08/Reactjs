import React, {Component} from 'react';
import './App.css';

//importando algo desde una constante
import tasks from './sample/tasks.json';

//components
import Tasks from './components/Tasks.js';
import TaskForm from './components/TaskForm.js';

 

class app1a extends Component {
    state = {
        tasks: tasks
    }

    addTask = () => {
        console.log('adding a new task')
    }

    render() {
        //this.addTask(); Mandarla a TaskForm.js -> props   

        return (
            <div>
            <TaskForm addTask={this.addTask}/>
                <Tasks tasks = {this.state.tasks}/>
            </div>
        );
    }
}

export default app1a;
