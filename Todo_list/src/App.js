import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid"; //Custom id  random!

import Title from "./components/Title/Title";
import Search from "./components/Search/Search";
import Sort from "./components/Sort/Sort";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";
// import EditTodo from "./components/EditTodo/EditTodo";

function App() {
    const [todoList, setTodoList] = useState(() => {
        const innitTodo = JSON.parse(localStorage.getItem("new-array")) || [
            {
                id: uuidv4(),
                title: "Đi chơi",
                level: "Important",
                isDone: true,
            },
            { id: uuidv4(), title: "Đi chơi", level: "Normal", isDone: true },
            {
                id: uuidv4(),
                title: "Đi chơi",
                level: "Not Important",
                isDone: true,
            },
        ];
        return innitTodo;
    });

    // const [titleEdit, setTitleEdit] = useState();
    // filter Todo:
    const [filterTodoList, setFilterTodoList] = useState("all");

    // check isDone Todo:
    // const [doneTodo, setdoneTodo] = useState("");

    const handleShowAll = () => {
        setFilterTodoList("all");
    };
    const handleShowImportant = () => {
        setFilterTodoList("Important");
    };
    const handleShowNormal = () => {
        setFilterTodoList("Normal");
    };
    const handleShowNotImportant = () => {
        setFilterTodoList("Not Important");
    };
    const handleShowTodoDone = () => {
        setFilterTodoList(true);
    };
    const handleShowTodoNotDone = () => {
        setFilterTodoList(false);
    };

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

    function handleTodoDone(todo) {
        const index = todoList.findIndex((x) => x.id === todo.id);
        if (index < 0) return;
        const newTodoList = [...todoList];
        newTodoList[index].isDone = !newTodoList[index].isDone;
        setTodoList(newTodoList);
        localStorage.setItem("new-array", JSON.stringify(newTodoList));
    }

    function handleChangeEdit(e, id) {
        const index = todoList.findIndex((x) => x.id === id);
        if (index < 0) return;
        const newTodoList = [...todoList];
        newTodoList[index].title = e.target.value;
        console.log(newTodoList);
        setTodoList(newTodoList);
        localStorage.setItem("new-array", JSON.stringify(newTodoList));
    }

    const [hideAndShow, setHideAndShow] = useState(false);
    function hideAndShowForm() {
        setHideAndShow(!hideAndShow);
    }

    const todoCards = todoList
        .filter(
            (todo) =>
                filterTodoList === "all" ||
                filterTodoList === todo.level ||
                filterTodoList === todo.isDone
        )
        .map((todo, index) => (
            <Todos
                todos={todo}
                index={index}
                onTodoDelete={handleTodoDelete}
                onTodoDone={handleTodoDone}
                onChangeEdit={(e) => handleChangeEdit(e, todo.id)}
            />
        ));

    const sortFilter = (
        <Sort
            onShowAll={handleShowAll}
            onShowImportant={handleShowImportant}
            onShowNormal={handleShowNormal}
            onShowNotImportant={handleShowNotImportant}
            onShowTodoDone={handleShowTodoDone}
            onShowTodoNotDone={handleShowTodoNotDone}
        />
    );

    //Ẩn hiện form add
    const formCard = hideAndShow && <Form onSubmit={handleTodoFormSubmit} />;

    return (
        <div className="container">
            <Title />
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <Search />
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    {sortFilter}
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button
                        type="button"
                        className="btn btn-info btn-block mb-3"
                        onClick={hideAndShowForm}
                    >
                        Add Item
                    </button>
                </div>
            </div>
            <div className="row mb-5 d-flex justify-content-end">
                <div className="col-md-6 d-flex">{formCard}</div>
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
                            <th style={{ width: "15%", textAlign: "center" }}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>{todoCards}</tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
