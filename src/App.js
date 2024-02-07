import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar.js";
import News from './components/News.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  // pageSize = 10
  apiKey = process.env.REACT_APP_API_KEY
  
  state = {
    progress: 0
  }

  setProgress = (progress) =>{
    this.setState({progress: progress})
  }
  render() {
   
    return (
      <>
        <BrowserRouter>
        <LoadingBar
            color='#f11946'
            progress={this.state.progress}

          />
          <Navbar />


          <Routes>
            <Route exact path="/" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} headLine="General" key="general" country="in" pageSize={10} category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} headLine="Business" key="business" country="in" pageSize={10} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} headLine="Entertainment" key="entertainment" country="in" pageSize={10} category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} headLine="Health" key="health" country="in" pageSize={10} category="health" />} />
            <Route exact path="/science" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} headLine="Science" key="science" country="in" pageSize={10} category="science" />} />
            <Route exact path="/sports" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} headLine="Sports" key="sports" country="in" pageSize={10} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} headLine="Technology" key="technology" country="in" pageSize={10} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}