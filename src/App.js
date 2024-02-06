import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar.js";
import News from './components/News.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Spinner from './components/Spinner.js';



export default class App extends Component {
  // pageSize = 10
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          {/* <Spinner /> */}
          
          <Routes>
            <Route exact path="/" element={<News headLine="General" key="general" country="in" pageSize={10} category="general" />}></Route>
            <Route exact path="/business" element={<News headLine="Business" key="business" country="in" pageSize={10} category="business" />} />
            <Route exact path="/entertainment" element={<News headLine="Entertainment" key="entertainment" country="in" pageSize={10} category="entertainment" />} />
            <Route exact path="/health" element={<News headLine="Health" key="health" country="in" pageSize={10} category="health" />} />
            <Route exact path="/science" element={<News headLine="Science" key="science" country="in" pageSize={10} category="science" />} />
            <Route exact path="/sports" element={<News headLine="Sports" key="sports" country="in" pageSize={10} category="sports" />} />
            <Route exact path="/technology" element={<News headLine="Technology" key="technology" country="in" pageSize={10} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}