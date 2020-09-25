import React, { useState }from 'react'  

const TaskCreator = ({ callback }) => {
//Def.edo.del componen-> value{} que se alterarà con onChange
   const [newTaskName, setNewTaskName] = useState('');

   const updateNewTaskValue = e => setNewTaskName(e.target.value);

   const createNewTask = () => {
      callback(newTaskName);
               //data que quiero agregar
      console.log(newTaskName);
      setNewTaskName(''); //para que input quede limpio
   }

   return (
      <div className="my-1">
        <input 
            type="text" 
            className="form-control" 
            value={newTaskName} 
            onChange={updateNewTaskValue}
         />
         <button className="btn btn-primary mt-1" onClick={ createNewTask }>
            Add
         </button>
      </div>
   );
}

export default TaskCreator;




