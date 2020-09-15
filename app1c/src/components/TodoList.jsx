import React from 'react';

const TodoList = () =>{
    return(
        <div className="todo-list">
            <ul>
                <li>
                    <div>Shopping</div>
                    <div className="icon">
                        <i title="Complete" className="fas fa-check circle" />
                        <i title="Delete" className="fas fa-trash" />
                    </div>
                </li>
                <li>
                    <div>code</div>
                    <div className="icon">
                        <i title="Complete" className="fas fa-check circle" />
                        <i title="Delete" className="fas fa-trash" />
                    </div>
                </li>
                <li>
                    <div>Play</div>
                    <div className="icon">
                        <i title="Complete" className="fas fa-check circle" />
                        <i title="Delete" className="fas fa-trash" />
                    </div>
                </li>


            </ul>

        </div>
    );
}
export default TodoList;
