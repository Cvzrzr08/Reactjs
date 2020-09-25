import React, { useState }from 'react';
import TaskRow from './components/TaskRow'
import TaskBanner from './components/TaskBanner'
import TaskCreator from './components/TaskCreator'

function App() {
        
    const [userName, setUserName] = useState('Carlos');
    const [taskItems, setTaskItems] = useState([
        {name: 'Task one', done: false},
        {name: 'Task Two', done: false},
        {name: 'Task Three', done: true},
        {name: 'Task Four', done: false}
    ]);

   //cambiar el estado de una tarea,para el onchange
   const createNewTask = taskName => {
      //SI NO ENCONTRASTES !
      if (!taskItems.find(t => t.name === taskName)) {
         setTaskItems([...taskItems, {name: taskName, done: false}])
                     //copia task,  tarea nueva(taskName) con prop name y done
      }
   }

                     //reciviendo una tarea
       // ºº
   const toggleTask = task =>
                                                          //if    true              : false
      setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)))
                                 //tomar(name) y comprobar con la tarea que me estan dando.
      
   
   //generando multiples filas
    const taskTableRow = () => {
                           //º
       return taskItems.map(task => (
                         //º                                ºº
          <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
                  //#  
       ))
    }


  return (
    <div>
       <TaskBanner userName = { userName } taskItems = { taskItems }/>
       <TaskCreator callback = { createNewTask }/>
        <h1>hellow world</h1>
        <table className = "table table-striped table-bordered">

            <thead>
             <tr>
                <th>Description</th>
                <th>Done</th>
            </tr>
            </thead>

                <tbody>
            {taskTableRow()}
        </tbody>
        </table>
    </div>
  );
}

export default App;


//copia de la lista ([...taskItems])

