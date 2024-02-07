import React, { Component } from 'react'
import loading from "./loading.gif"

export default class Spinner extends Component {
  render() {
    return (
        <div className="container" >
            <div style={{display: "flex", justifyContent: "space-around"}}><img src={loading} style={{height: '200px', width: '200' }} alt="Loading..." /></div>
          
            <div className="container" style={{textAlign: "center"}}>Loading ...</div>
        </div>
    )
  }
}
