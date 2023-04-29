import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'typeface-montserrat'
import 'typeface-hind-guntur'
import 'fontsource-cormorant-infant'
import Home from "./pages/home"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </Router>

  </React.StrictMode>
);

reportWebVitals();
