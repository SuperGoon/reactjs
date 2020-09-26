import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="col-md-4 col-sm-6 mb-3 mt-3">
      <div className="card-group">
        <div className="card">
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
          </div>
          <div className="card-footer">
            <small small className="text-muted">
              {props.footer}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;