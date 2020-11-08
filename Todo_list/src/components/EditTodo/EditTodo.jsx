import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

EditTodo.propTypes = {
    todos: PropTypes.array,
};

EditTodo.defaultValue = {
    todos: [],
};

function EditTodo(props) {
    const { todos } = props;

    function handleCancelChange() {}

    function handleSavelChange() {}

    return todos.map((todo, index) => (
        <tr key={todo.id}>
            <td className="text-center">{index + 1}</td>
            <td>
                <input
                    type="text"
                    className="form-control"
                    defaultValue={todo.title}
                />
            </td>
            <td className="text-center">
                <span
                    //set className with condition
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
            <td>
                <button
                    type="button"
                    className="btn btn-default btn-sm"
                    onClick={handleCancelChange}
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick={handleSavelChange}
                >
                    Save
                </button>
            </td>
        </tr>
    ));
}

export default EditTodo;
