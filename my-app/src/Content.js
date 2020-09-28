import React from 'react';

function Content(props) {
    return(
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
            <img src={props.imgLink} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">{props.textImage}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">{props.time}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content