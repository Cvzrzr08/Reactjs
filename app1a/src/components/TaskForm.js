import React, { Component }from 'react';

export default class TaskForm extends Component {
    //[3]

    state = {
        title: '',
        descripcion: ''
    }

    //[2]
    onSubmitX = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    onChangeX = (e) => {
        this.setState({      //escucha evento de cada tipeo.
            [e.target.name]: e.target.value
                     //agrega escucha a la propiedad name->         
        })
        console.log(e.target.name, e.target.value);
    }

    //[1]
    render() {
        //console.log(this.props);
        this.props.addTask();
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
