import React, { useState } from "react";
import PropTypes from "prop-types";

Form.propTypes = {
    onSubmit: PropTypes.func,
};
Form.defaultProps = {
    onSubmit: null,
};

function Form(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState("");
    const [levelTodo, setLevelTodo] = useState("");

    function handleValueChange(e) {
        let text = e.target.value;
        setValue(text);
    }

    function handleOnChangSelected(e) {
        let option = e.target.value;
        console.log(option);
        setLevelTodo(option);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;
        const formValues = {
            title: value.trim(),
            level: levelTodo,
        };
        onSubmit(formValues);
        setValue("");
        setLevelTodo("");
    }

    return (
        <form className="form-inline">
            <div className="form-group ">
                <input
                    type="text"
                    className="form-control"
                    onChange={handleValueChange}
                    placeholder="Todo Something here"
                />
            </div>
            <div className="form-group">
                <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={handleOnChangSelected}
                >
                    <option value={0}>Important</option>
                    <option value={1}>Normal</option>
                    <option value={2}>Not Important</option>
                </select>
            </div>

            <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
            >
                Submit
            </button>
            <button type="button" className="btn btn-outline-secondary">
                Cancel
            </button>
        </form>
    );
}

export default Form;
