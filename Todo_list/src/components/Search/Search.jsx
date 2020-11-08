import React from "react";

function Search() {
    const handleChangeSearch = (e) => {};

    return (
        <div>
            <div className="input-group">
                <span className="input-group-btn">
                    <button className="btn btn-info">Clear</button>
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Something..."
                    onChange={handleChangeSearch}
                />
            </div>
        </div>
    );
}

export default Search;
