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

    const [inputValue, setInputValue] = useState("");
    const [levelTodo, setLevelTodo] = useState("");

    function handleValueChange(e) {
        let text = e.target.value;
        setInputValue(text);
    }

    function handleOnChangSelected(e) {
        let option = e.target.value;
        setLevelTodo(option);
    }

    function handleSubmit(e) {
        // Ngăn trình duyệt reload
        e.preventDefault();
        if (!onSubmit) return;

        const formValues = {
            title: inputValue,
            level: levelTodo,
        };
        onSubmit(formValues);
        //Reset Form
        setInputValue("");
        setLevelTodo("");
    }

    return (
        <form className="form-inline" onSubmit={handleSubmit}>
            <div className="form-group ">
                <input
                    type="text"
                    className="form-control"
                    onChange={handleValueChange}
                    placeholder="Todo Something here"
                    value={inputValue}
                />
            </div>
            <div className="form-group">
                <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={handleOnChangSelected}
                >
                    <option value={"Important"}>Important</option>
                    <option value={"Normal"}>Normal</option>
                    <option value={"Not Important"}>Not Important</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            <button type="button" className="btn btn-danger">
                Cancel
            </button>
        </form>
    );
}

export default Form;
