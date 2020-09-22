import React from 'react';

const TaskBanner = ({userName, taskItems}) => {
return(
   <h4 className="bg-primary text-white text-center p-4">
      {userName}'s TaskApp
      ({taskItems.filter(t => !t.done).length} tasks to do)
   </h4>
   )
}

export default TaskBanner;

//filter motrara las tareas a completar, solo length mostraria total de las tareas, contrario la primera devolvera todas las tareas que sea contrario a true = false
// ({userName, taskItems}) => {
    //evita poner 'props
