import React from "react";
import PropTypes from "prop-types";

Todos.propTypes = {
    todos: PropTypes.array,
    onTodoDelete: PropTypes.func,
};
Todos.defaultProps = {
    todos: [],
    onTodoDelete: null,
};

function Todos(props) {
    const { todos, index, onTodoDelete } = props;
    // const [item, setItem] = useState();

    let classNameBadge = "";
    let nameBadge = "";
    switch (todos.level) {
        case 0:
            classNameBadge = "badge badge-danger";
            nameBadge = "Important";
            break;
        case 1:
            classNameBadge = "badge badge-warning";
            nameBadge = "Normal";
            break;
        default:
            classNameBadge = "badge badge-secondary";
            nameBadge = "Not Important";
            break;
    }

    function handleClickDelete(todos) {
        if (onTodoDelete) {
            onTodoDelete(todos);
        }
    }

    return (
        <tr>
            <td className="text-center">{index}</td>
            <td>{todos.title}</td>
            <td className="text-center">
                <span className={classNameBadge}>{nameBadge}</span>
            </td>
            <td>
                <button type="button" className="btn btn-warning btn-sm">
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
