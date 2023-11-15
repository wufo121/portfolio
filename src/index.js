import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';


ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element = {<Home />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>,
  document.getElementById('root')
);


