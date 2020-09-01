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
            id: this.state.tasks.length

        }
        console.log(newTask);
        this.setState({ //memoria inicial
            tasks: [...this.state.tasks, newTask]
        })                              //añadiendo tarea creada

    }

    deleteTask = (id) => {
        const newTask = this.state.tasks.filter(task => task.id !== id)
        console.log(newTask); 
        // alterando en el render, (arreglo a alterar: nuevas tareas)
        this.setState({tasks: newTask})
    }

    checkDone = (id) => {
        const newTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task.done = !task.done
            }
            return task;
        })
        this.setState({tasks: newTasks})
    }

    render() {

        //this.addTask(); Mandarla a TaskForm.js -> props   

        return (
            <div>     
            <TaskForm addTask={this.addTask}/> 
                <Tasks tasks = {this.state.tasks} deleteTask = {this.deleteTask} checkDone = {this.checkDone}/>
            </div>
        );
    }
}

export default app1a;
