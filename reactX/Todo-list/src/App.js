import React, {useState, useEffect} from 'react';
import './App.css';
import { TodoItem, Example } from './components/Todoitem.js'
// import Example from './components/Testhook.js'

function App() {
  const [ arrayTodoList, setArrayTodoList] = useState([
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
  ])

  function onClickItem(_index){
    const newArray = arrayTodoList.map((ele, index) => index === _index ? {...ele, isDone: !ele.isDone} : ele)
    setArrayTodoList(newArray)
  }

  return (
    <div className="App">
        {arrayTodoList.length < 1 && "Nothing here"}

        {
          arrayTodoList.length && arrayTodoList.map((ele, index) =>(
            <TodoItem items={ele} onClick={() => onClickItem(index)} key={index}/>)
          )
        }
        <div className="example">
          <Example />
        </div>
    </div>
  );
}

export default App;
