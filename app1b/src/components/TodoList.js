import React from 'react';

//import components
import Todo from './Todo';

const TodoList = ({ todos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list" ></ul>
            {todos.map((todo) => 
                <Todo key={todo.id} text={todo.text} />
            )}
        </div>


    );

}
export default TodoList;
