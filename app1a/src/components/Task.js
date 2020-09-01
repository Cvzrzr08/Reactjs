import React, { Component } from 'react';
//import './Task.css';

class Task extends Component {
    stylecomplete () {
        return{
            fontsize: '20px',
            color: 'gray',
            TextDecoration: 'none'
        };
    }


        styleComplete(){
            return{
                fontSize: '20px',
                color: this.props.task1.done ? 'gray': 'black',
                textDecoration: this.props.task1.done ? 'line-through': 'none'
            }
        }


    render() {

        //destructuring- extrayendolos para reducir code
        //original-{this.props.task1.title} - 
        const {task1}=this.props

        return (
            <div style = {this.styleComplete()}>
                {task1.title} - 
                {task1.description} - 
                {task1.done} - 
                {task1.id}
                <input type = "checkbox" 
                    onChange = {this.props.checkDone.bind(this, task1.id)}/>                    
                <buttom style={btnDeleted} 
                    onClick = {this.props.deleteTask.bind(this,task1.id)}>
                         x
                     </buttom>

            </div>
        );
    }
}

//estilo en linea o crearlo como componente independiente
const btnDeleted = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    pading: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',

}

export default Task;
