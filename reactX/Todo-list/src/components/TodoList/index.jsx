import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import checkIcon from "../../image/check.svg";
import checkDoneIcon from "../../image/check-done.svg";
import deleteIcon from "../../image/delete.svg";

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
};

function TodoList(props) {
    const { todos, onTodoClick } = props;

    let url = checkIcon;
    if (todos.isDone) {
        url = checkDoneIcon;
    }

    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        <div className="todo-list">
            <img
                src={url}
                onClick={() => handleClick(todos)}
                className="todo-list-check"
            />
            <p
                className={classNames("todo-list-item", {
                    "todo-list-done": todos.isDone,
                })}
                key={todos.id}
            >
                {todos.title}
            </p>
            <img src={deleteIcon} width={32} className="todo-list-delete" />
        </div>
    );
}

export default TodoList;
