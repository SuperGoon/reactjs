import React from "react";
import PropTypes from "prop-types"; //Type of props
import classNames from "classnames"; //npm classnames - join class together with condition
import "./todos.css";

Todos.propTypes = {
    todos: PropTypes.array,
    index: PropTypes.number,
    onTodoDelete: PropTypes.func,
    onTodoDone: PropTypes.func,
    onChangeEdit: PropTypes.func,
};
Todos.defaultProps = {
    todos: [],
    onTodoDelete: null,
    onTodoDone: null,
    onChangeEdit: null,
};

function Todos(props) {
    const { todos, index, onTodoDelete, onTodoDone, onChangeEdit } = props; //onEditTodo

    //Eventlistener - onClick -> onTodoDelete - (App)
    function handleClickDelete(todo) {
        if (onTodoDelete) {
            onTodoDelete(todo);
        }
    }
    function handleClickDone(todo) {
        if (onTodoDone) {
            onTodoDone(todo);
        }
    }

    return (
        <tr key={todos.id}>
            <td className="text-center">{index + 1}</td>
            <td className="inputText">
                <input
                    type="text"
                    value={todos.title}
                    id={todos.id}
                    onChange={onChangeEdit}
                    className={classNames({
                        "is-done": todos.isDone === true,
                    })}
                />
            </td>
            <td className="text-center">
                <span
                    //set className with condition
                    className={classNames(
                        "badge",
                        { "badge-secondary": todos.level === "Not Important" },
                        { "badge-danger": todos.level === "Important" },
                        { "badge-warning": todos.level === "Normal" }
                    )}
                >
                    {todos.level}
                </span>
            </td>
            <td className="d-flex justify-content-around">
                <button
                    type="button"
                    className={classNames("btn btn-primary btn-sm", {
                        "hidden-button": todos.isDone === true,
                    })}
                    onClick={() => handleClickDone(todos)}
                >
                    Done
                </button>
                <button
                    type="button"
                    className="btn btn-warning btn-sm"
                    className={classNames("btn btn-warning btn-sm", {
                        "hidden-button": todos.isDone === false,
                    })}
                    onClick={() => handleClickDone(todos)}
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleClickDelete(todos)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default Todos;
