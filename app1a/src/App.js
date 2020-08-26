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

    render() {
        return (
            <div>
            <TaskForm/>
                <Tasks tasks = {this.state.tasks}/>
            </div>
        );
    }
}

export default app1a;
