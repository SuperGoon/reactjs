import React, { useState } from "react";
import "./reset.css";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import Example from "./components/Example";
import TodoForm from "./components/TodoForm";

function App() {
    const [todoList, setTodoList] = useState(() => {
        const innitTodo = localStorage.getItem("todo_list") || [
            { id: 1, title: "Đi chơi", isDone: true },
            { id: 2, title: "Đi chợ", isDone: true },
            { id: 3, title: "Đi ăn", isDone: false },
        ];
        return innitTodo;
    });

    function handleTodoClick(todo) {
        console.log(todo);
        const newTodoList = todoList.map((ele) =>
            ele.id === todo.id ? { ...ele, isDone: !ele.isDone } : ele
        );
        setTodoList(newTodoList);
        localStorage.setItem("todo_list", newTodoList);
    }

    function handleTodoFormSubmit(formValues) {
        console.log("Form: ", formValues);
        const newTodo = { id: todoList.length + 1, ...formValues };
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
        localStorage.setItem("todo_list", newTodoList);
    }

    return (
        <div className="App">
            <div className="example">
                <Example />
                <ColorBox />
            </div>
            <h1>React Hook - TodoList</h1>

            <TodoForm onSubmit={handleTodoFormSubmit} />
            <TodoList todos={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default App;
