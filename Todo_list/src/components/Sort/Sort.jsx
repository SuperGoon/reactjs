import React from "react";

function Sort(props) {
    const {
        onShowAll,
        onShowImportant,
        onShowNormal,
        onShowNotImportant,
        onShowTodoDone,
        onShowTodoNotDone,
    } = props;

    const onClickShowAll = () => {
        onShowAll();
    };
    const onClickShowImportant = () => {
        onShowImportant();
    };
    const onClickShowNormal = () => {
        onShowNormal();
    };
    const onClickShowNotImportant = () => {
        onShowNotImportant();
    };

    const onClickShowTodoDone = () => {
        onShowTodoDone();
    };
    const onClickShowTodoNotDone = () => {
        onShowTodoNotDone();
    };

    return (
        <div>
            <div className="dropdown">
                <button
                    type="button"
                    className="btn btn-outline-secondary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Filter :<span className="caret" />
                </button>
                <div className="dropdown-menu">
                    <p
                        className="dropdown-item"
                        onClick={() => onClickShowAll()}
                    >
                        All
                    </p>
                    <p
                        className="dropdown-item"
                        onClick={() => onClickShowImportant()}
                    >
                        Important
                    </p>
                    <p
                        className="dropdown-item"
                        onClick={() => onClickShowNormal()}
                    >
                        Normal
                    </p>
                    <p
                        className="dropdown-item"
                        onClick={() => onClickShowNotImportant()}
                    >
                        Not Important
                    </p>
                    <p
                        className="dropdown-item"
                        onClick={() => onClickShowTodoDone()}
                    >
                        Đã xong!
                    </p>
                    <p
                        className="dropdown-item"
                        onClick={() => onClickShowTodoNotDone()}
                    >
                        Chưa hoàn thành!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Sort;
