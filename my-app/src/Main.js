import React, { Component } from 'react';
import './App.css';

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

// const listContent = {
//   img1: {
//     imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
//     textImage: "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     time: "About 9 minutes ago"
//   },
//   img2: {
//     imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
//     textImage: "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     time: "About 9 minutes ago"
//   },
//   img3: {
//     imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
//     textImage: "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     time: "About 9 minutes ago"
//   }
// }

function Main() {
  return (
    <div>
      <div className="container">
        <div className="row">
      {/* <div className="col-md-4">
      <div className="card mb-4 shadow-sm"> */}


              <Content
              imgLink ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
              textImage="This is a wider card with supporting text below as a natural lead-in to additional content."
              time="About 9 minutes ago"
              />
              <Content
              imgLink ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
              textImage="This is a wider card with supporting text below as a natural lead-in to additional content."
              time="About 9 minutes ago"
              />
              <Content
              imgLink ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
              textImage="This is a wider card with supporting text below as a natural lead-in to additional content."
              time="About 9 minutes ago"
              />
               <Content
              imgLink ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
              textImage="This is a wider card with supporting text below as a natural lead-in to additional content."
              time="About 9 minutes ago"
              />
               <Content
              imgLink ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
              textImage="This is a wider card with supporting text below as a natural lead-in to additional content."
              time="About 9 minutes ago"
              />
            </div>
          </div>
        </div>
        // </div>
        // </div>
  );
}

export default Main;