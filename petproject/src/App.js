import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "core-js";

import Title from "./components/Title/Title";
import Search from "./components/Search/Search";
import Sort from "./components/Sort/Sort";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";

function App() {
    const [todoList, setTodoList] = useState(() => {
        const innitTodo = JSON.parse(localStorage.getItem("new-array")) || [
            { id: uuidv4(), title: "Đi chơi", level: "Important" },
            { id: uuidv4(), title: "Đi chơi", level: "Normal" },
            { id: uuidv4(), title: "Đi chơi", level: "Not Important" },
        ];
        return innitTodo;
    });

    console.log("todoList", todoList);

    function handleTodoFormSubmit(formValues) {
        console.log("Form: ", formValues);
        const newTodo = { id: uuidv4(), ...formValues };
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
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

    return (
        <div className="container">
            <Title />
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <Search />
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <Sort />
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button
                        type="button"
                        className="btn btn-info btn-block mb-3"
                    >
                        Add Item
                    </button>
                </div>
            </div>
            <div className="row mb-5 d-flex justify-content-end">
                <div className="col-md-6 d-flex">
                    <Form onSubmit={handleTodoFormSubmit} />
                </div>
            </div>
            <div className="card card-success">
                <div className="card-header text-white bg-info">
                    List Todo Item
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th
                                style={{ width: "10%" }}
                                className="text-center"
                            >
                                #
                            </th>
                            <th>Todo - Item</th>
                            <th
                                style={{ width: "15%" }}
                                className="text-center"
                            >
                                Level
                            </th>
                            <th style={{ width: "15%" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Todos
                            todos={todoList}
                            onTodoDelete={handleTodoDelete}
                        />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
