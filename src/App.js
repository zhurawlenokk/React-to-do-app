import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/toDoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState ([]);
  return (
    <div className="App">
      <header>
        <h1>Simple TO-DO App</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText} 
      />
      <ToDoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
