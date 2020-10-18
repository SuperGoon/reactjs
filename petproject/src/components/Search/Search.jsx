import React from "react";

function Search() {
    return (
        <div>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Something..."
                />
                <span className="input-group-btn">
                    <button className="btn btn-info">Clear</button>
                </span>
            </div>
        </div>
    );
}

export default Search;
