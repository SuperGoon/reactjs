import React, { useState } from "react";
import "./reset.css";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import Example from "./components/Example";
import TodoForm from "./components/TodoForm";

function App() {
    const [todoList, setTodoList] = useState(() => {
        const innitTodo = JSON.parse(localStorage.getItem("new-array")) || [
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
        localStorage.setItem("new-array", JSON.stringify(newTodoList));
    }

    function handleTodoDelete(todo) {
        const index = todoList.findIndex((x) => x.id === todo.id);
        if (index < 0) return;
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
        localStorage.setItem("new-array", JSON.stringify(newTodoList));
    }

    function handleTodoFormSubmit(formValues) {
        console.log("Form: ", formValues);
        const newTodo = { id: todoList.length + 1, ...formValues };
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
        localStorage.setItem("new-array", JSON.stringify(newTodoList));
    }

    return (
        <div className="App">
            <div className="example">
                <Example />
                {/* <ColorBox /> */}
            </div>

            <div className="todo">
                <TodoForm onSubmit={handleTodoFormSubmit} />

                {todoList.map((todo) => (
                    <TodoList
                        todos={todo}
                        onTodoClick={handleTodoClick}
                        onTodoDelete={handleTodoDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
