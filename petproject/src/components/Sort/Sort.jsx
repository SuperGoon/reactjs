import React from "react";

function Sort() {
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
                    Sort by <span className="caret" />
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                        Action
                    </a>
                    <a className="dropdown-item" href="#">
                        Another action
                    </a>
                    <a className="dropdown-item" href="#">
                        Something else here
                    </a>
                    <div role="separator" className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                        Separated link
                    </a>
                    <a className="dropdown-item" href="#">
                        Separated link
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sort;
