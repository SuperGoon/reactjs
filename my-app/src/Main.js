import React, { Component } from 'react';
import './App.css';
import Content from "./Content"

function Main() {

  const array = [
    {
      imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
      textImage: "This is a wider card with supporting text below as a natural lead-in to additional content.",
      time: "About 9 minutes ago"
    },
    {
      imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
      textImage: "This is a wider card with supporting text below as a natural lead-in to additional content.",
      time: "About 9 minutes ago"
    },
    {
      imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
      textImage: "This is a wider card with supporting text below as a natural lead-in to additional content.",
      time: "About 9 minutes ago"
    },
    {
      imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
      textImage: "This is a wider card with supporting text below as a natural lead-in to additional content.",
      time: "About 9 minutes ago"
    },
    {
      imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
      textImage: "This is a wider card with supporting text below as a natural lead-in to additional content.",
      time: "About 9 minutes ago"
    },
    {
      imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU",
      textImage: "This is a wider card with supporting text below as a natural lead-in to additional content.",
      time: "About 9 minutes ago"
    },
  ]
  const arrayItem = array.map((element)=>{
    return (
      <Content imgLink = {element.imgLink} textImage = {element.textImage} time = {element.time} />
    )
  })
  return (
    <div>
      <div className="container">
        <div className="row">
              {arrayItem}
            </div>
          </div>
        </div>
  );
}


export default Main;