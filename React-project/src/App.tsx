/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
