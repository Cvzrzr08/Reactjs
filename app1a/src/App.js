import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';

//importando algo desde una constante
import tasks from './sample/tasks.json';

//components
import Tasks from './components/Tasks.js';
import TaskForm from './components/TaskForm.js';
import Posts from './components/Posts'


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

        return (<div>     

            <Router>

                <Link to = "/"> home </Link>
                <br/>
                <Link to = "/posts"> Posts</Link>

                <Route exact path ="/" render = {() => {
                return <div>     
                <TaskForm addTask={this.addTask}/> 
                <Tasks 
                    tasks = {this.state.tasks} 
                    deleteTask = {this.deleteTask} 
                    checkDone = {this.checkDone}/>
                </div>
                }}>
                </Route>
                
                <Route path ="/posts" component = {Posts} />
            </Router>


        </div>
        );
    }
}

export default app1a;
            //<Posts/> se mando al <Route
                                        //propiedad / nombre a asignar    / a renderizar
                                        //<Route path =   "/posts"         Component = {Posts}>
