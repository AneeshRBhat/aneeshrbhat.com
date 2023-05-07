import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'typeface-montserrat'
import 'fontsource-cormorant-infant'
import 'typeface-lato'
import Home from "./pages/home"
import About from './pages/About'
import Post from './pages/post';
import NotFound from './pages/notFound';
import Blog from './pages/blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/post/:id' element={<Post/>}/>
        <Route exact path='/404' element={<NotFound/>}/>
        <Route exact path='/blog' element={<Blog/>}/>
      </Routes>
    </Router>

  </React.StrictMode>
);

reportWebVitals();
