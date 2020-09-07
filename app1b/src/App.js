import React, { useState }from 'react';
import './App.css';

//importing components
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
    //states [a]
    const [inputText, setInputText] = useState("");
    //submit [b]
    const [todos, setTodos] = useState([]);


  return (
      <div className="App">
        <header>
            <h1>
          I'm put on a headeir
            </h1>
        </header>
      <Form 
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}/>
      <TodoList todos={todos}/>
      </div>
  );
}

export default App;
