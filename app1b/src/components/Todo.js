import React from 'react';

const Todo = ({ text, todo, todos, setTodos}) => {
    //events
const deleteHandler = () => {
    //console.log(todo)
        setTodos(todos.filter((el) => el.id !== todo.id)) 
}
const completeHandler = () => {
    setTodos(todos.map(item => { 
        //se creo un nuevo arreglo para comparalos con los mismo(id)
        if (item.id === todo.id) {
            return { 
                //resultado un {} ...(todas las propiedades), execion a cambiar: opuesto de complete-false a true
                ...item, completed: !item.completed
            }
        }
        return item;
    }))
}
   
    return (
        <div className="Todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
