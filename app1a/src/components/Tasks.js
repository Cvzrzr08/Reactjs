import React, { Component } from 'react';

import Task from './Task.js';

//finalidad de Tasks listar las tareas
class Tasks extends Component {
    render() {
        return (this.props.tasks.map(taske => 
            <Task 
                task1 ={taske} 
                key={taske.id} 
                deleteTask = {this.props.deleteTask}
                checkDone = {this.props.checkDone}
             />));
    }
}

export default Tasks;
