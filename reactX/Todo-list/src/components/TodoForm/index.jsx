import React, { useState } from "react";
import PropTypes from "prop-types";
import down from "../../image/down.svg";

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit: null,
};

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState("");

    function handleValueChange(e) {
        let text = e.target.value;
        setValue(text);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;
        const formValues = {
            title: value.trim(),
        };
        onSubmit(formValues);
        setValue("");
    }

    return (
        <div>
            <h1>React Hook - TodoList</h1>

            <div className="todo-form">
                <img src={down} width={30} />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={value}
                        onChange={handleValueChange}
                        placeholder="Add new Todo"
                    />
                </form>
            </div>
        </div>
    );
}

export default TodoForm;
