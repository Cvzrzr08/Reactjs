import React, { useState }from 'react';

function App() {
    const [userName, setUserName] = useState('Carlos');
    const [taskItems, setTaskItems] = useState([
        {name: 'Task one', done: false},
        {name: 'Task Two', done: false},
        {name: 'Task Three', done: true},
        {name: 'Task Four', done: false}
    ]);
    const taskTableRow = () => {
        return taskItems.map(task => (
            <tr key={task.name}>
                <td>{task.name}</td>
            </tr>
        ));
    }

  return (
    <div>
        <h1>hellow world</h1>
        <table>

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
