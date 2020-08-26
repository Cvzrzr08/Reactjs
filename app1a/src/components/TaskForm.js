import React, { Component }from 'react';

export default class TaskForm extends Component {
    //[3]

    state = {
        title: '',
        descripcion: ''
    }

    //[2]
    onSubmitX = (e) => {
        console.log('probando perro');
        e.preventDefault();
    }

    onChangeX = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        
        })
                    //escucha el evento cada que tipeo
        //console.log(e.target.value)
    }

    //[1]
    render() {
        return (
            <form onSubmit={this.onSubmitX}>
                <input
                    name='title'
                    type="text" 
                    placeholder="write a task" 
                    onChange={this.onChangeX} 
                    value={this.state.title}/>
                <br/>
                <br/>
                <textarea
                    name='description'
                    placeholder = "write a descrition"
                    onChange={this.onChangeX} 
                    value={this.state.description}>
                </textarea>
                <br/>
                <br/>
                <input type="submit"/>
            </form>
        );
    }
    
}

//export default TaskForm; [se manda al inicio]
