import React from "react";
import "./todoitem.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

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

    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li
                    className={classNames("todo-list-item", {
                        "todo-list-done": todo.isDone,
                    })}
                    key={todo.id}
                    onClick={() => handleClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
