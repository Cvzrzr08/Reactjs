import React from 'react';

//import components
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list" >
            {todos.map((todo) => 
                <Todo
                    todo={todo}//para comunicar con el form(props)
                    setTodos={setTodos}
                    todos={todos} 
                    key={todo.id} //id para cada nuevo arreglo en map
                    text={todo.text} />
            )}</ul>
        </div>


    );

}
export default TodoList;
