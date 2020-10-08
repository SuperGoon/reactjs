import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoItem, Example } from './components/Todoitem.js'
// import Example from './components/Testhook.js'

function App() {
  let arrayTodolist = [
    {
      title: "Đi chơi",
      isDone: true,
    },
    {
      title: "Đi học",
      isDone: true     
    },
    {
      title: "Đi chợ",
      isDone: false
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          arrayTodolist.length < 1 ? "Nothing here" : arrayTodolist.map(ele =>
          <TodoItem items={ele}
          />)
        }
          <Example />
      </header>
    </div>
  );
}

export default App;
