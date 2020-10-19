import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

Todos.propTypes = {
    todos: PropTypes.array,
    onTodoDelete: PropTypes.func,
};
Todos.defaultProps = {
    todos: [],
    onTodoDelete: null,
};

function Todos(props) {
    const { todos, onTodoDelete } = props;
    console.log(todos);

    function handleClickDelete(todo) {
        if (onTodoDelete) {
            onTodoDelete(todo);
        }
    }

    return todos.map((todo, index) => (
        <tr key={todo.id}>
            <td className="text-center">{index + 1}</td>
            <td>{todo.title}</td>
            <td className="text-center">
                <span
                    className={classNames(
                        "badge",
                        { "badge-secondary": todo.level === "Not Important" },
                        { "badge-danger": todo.level === "Important" },
                        { "badge-warning": todo.level === "Normal" }
                    )}
                >
                    {todo.level}
                </span>
            </td>
            <td className="d-flex justify-content-around">
                <button type="button" className="btn btn-warning btn-sm">
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleClickDelete(todo)}
                >
                    Delete
                </button>
            </td>
        </tr>
    ));
}

export default Todos;
