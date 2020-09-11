import React, { useState, useEffect }from 'react';
import './App.css';

//importing components
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
//status stuff
    //states [a]
    const [inputText, setInputText] = useState("a");
    //submit [b]
    const [todos, setTodos] = useState([]);
    //filter-status
    const [status, setStatus] = useState("all");
    //Filter-state
    const [filteredTodos, setFilteredTodos] = useState([]);

//useEfect
    useEffect(() => {
        //console.log('hey')
        filterHandler();
    }, [todos, status]);
       //[] indica que fx ejecutara 1 ves/ al primer renderizado del component
    //cada ves que [todo y status] cambie se ejecutara.

//funtions
    const filterHandler = () => {
                //all, complete, uncomplete
        switch(status){
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default: //mostrara todos 
                setFilteredTodos(todos);
                break;


        }
    }



  return (
      <div className="App">
        <header>
            <h1>
          I'm put on a headeir
            </h1>
        </header>
      <Form 
          setStatus={setStatus}
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}/>
      <TodoList 
          filteredTodos={filteredTodos}
          setTodos={setTodos} 
          todos={todos}/>
      </div>
  );
}

export default App;
