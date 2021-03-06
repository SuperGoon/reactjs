import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Main from './Main';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render (
  <Header />,
  document.getElementById('header')
  )
ReactDOM.render (
      <Jumbotron />,
      document.getElementById('jumbotron')
  )
ReactDOM.render (
    <Main />,
    document.getElementById('content')
)
ReactDOM.render (
  <Footer />,
  document.getElementById('footer')
)
  // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();