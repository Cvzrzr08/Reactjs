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

    addTask = (title, description) => {
        //creando objeto almacednado en constante(como memoria artificial)
        const newTask = {
            title: title,
            description: description,
            id:45

        }
        console.log(newTask);
        this.setState({ //memoria inicial
            tasks: [...this.state.tasks, newTask]
        })                              //añadiendo tarea creada
    }

    render() {

        //this.addTask(); Mandarla a TaskForm.js -> props   

        return (
            <div>     {"X"}         {"f(x)"}
            <TaskForm addTask={this.addTask}/>
                <Tasks tasks = {this.state.tasks}/>
            </div>
        );
    }
}

export default app1a;
