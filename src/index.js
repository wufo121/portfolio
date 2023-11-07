import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import Header from './Components/Header';


ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element = {<Home />} />

        </Routes>
      </Router>
    </React.StrictMode>,
  document.getElementById('root')
);


