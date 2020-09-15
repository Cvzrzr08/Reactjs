import React from 'react'
import TodoList from './TodoList';

const CreateTodo = () =>{
 return (
 <>
 <div className="box">
    <div className="text-end">
        <h2>React Todo App</h2>
        <h4>Add a new todo</h4>
    </div>

    <div className="text-addTodo">
        <input type="text" name="todo" placeholder="write here.." />
        <button className="btn-addTodo" type="button" name="addTodo">Add Todos</button>
    </div>

 </div>
 <TodoList/>
</>
);

}
export default CreateTodo;
