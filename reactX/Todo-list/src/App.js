import React, { useState, useEffect } from "react";
import queryString from "query-string";

import "./reset.css";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import Example from "./components/Example";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";

function App() {
    const [todoList, setTodoList] = useState(() => {
        const innitTodo = JSON.parse(localStorage.getItem("new-array")) || [
            { id: 1, title: "Đi chơi", isDone: true },
            { id: 2, title: "Đi chợ", isDone: true },
            { id: 3, title: "Đi ăn", isDone: false },
        ];
        return innitTodo;
    });

    const [postList, setPostList] = useState([]);

    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });

    const [filter, setFilters] = useState({
        _limit: 10,
        _page: 1,
    });

    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramsString = queryString.stringify(filter);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                const { data, pagination } = responseJSON;
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log("Error: ", error.message);
            }
        }

        fetchPostList();
    }, [filter]);

    function handlePageChange(newPage) {
        console.log(newPage);
        setFilters({
            ...filter,
            _page: newPage,
        });
    }

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
                <ColorBox />
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
            <PostList posts={postList} />
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default App;
