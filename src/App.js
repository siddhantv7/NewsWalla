import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar.js";
import News from './components/News.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default class App extends Component {
  // pageSize = 10
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/general" element={<News key="general" country="in" pageSize={10} category="general" />}></Route>
            <Route exact path="/business" element={<News key="business" country="in" pageSize={10} category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" pageSize={10} category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" country="in" pageSize={10} category="health" />} />
            <Route exact path="/science" element={<News key="science" country="in" pageSize={10} category="science" />} />
            <Route exact path="/sports" element={<News key="sports" country="in" pageSize={10} category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" country="in" pageSize={10} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}