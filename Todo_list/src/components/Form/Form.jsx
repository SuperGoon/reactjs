import React, { useState } from "react"; //useState Hook
import PropTypes from "prop-types";
// import { split } from "core-js/fn/symbol";

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

    //Function lấy ra value của Input khi nhận thấy sự thay đổi (onChange)
    function handleValueChange(e) {
        let text = e.target.value;
        setInputValue(text);
    }

    //Function lấy ra value của option trong select
    function handleOnChangSelected(e) {
        let option = e.target.value;
        setLevelTodo(option);
    }

    function reset() {
        document.getElementById("formControlSelect").selectedIndex = 0;
    }

    //Function xử lý submit form
    function handleSubmit(e) {
        // Ngăn chặn hành động mặc định reload khi submid của trình duyệt
        e.preventDefault();
        // Validate input value
        if (!onSubmit) return;
        if (!inputValue) return alert("Vui lòng nhập Todo");
        if (!levelTodo) return alert("Vui lòng nhập Level");

        // Create formValue
        const formValues = {
            title: inputValue,
            level: levelTodo,
            isDone: false,
        };

        onSubmit(formValues);
        //Reset Form
        setInputValue("");
        reset();
        setLevelTodo("");
    }

    const [dateForm, setDateForm] = useState("");
    const onTimeChange = (e) => {
        setDateForm(new Date(e.target.value));
    };

    const onSetTimeChange = (e) => {
        let time = dateForm;
        let hm = e.target.value;
        time.setHours(hm.slice(0, 2));
        time.setMinutes(hm.slice(2));
        setDateForm(time);
    };

    return (
        <>
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
                        id="formControlSelect"
                        onChange={handleOnChangSelected}
                    >
                        <option value={"Choose Level"}>Choose Level</option>
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
                <input type="date" onChange={onTimeChange} />
                <input
                    type="time"
                    disabled={dateForm ? false : true}
                    onChange={onSetTimeChange}
                />
            </form>
        </>
    );
}

export default Form;
