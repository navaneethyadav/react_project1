import React, { Component } from 'react'

export default class MyClassComponent2 extends Component {
  render() 
    { 
      this.state = {
      sname : "Shalini"
    };
    return (
      <div>
        <center>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/bXlQ3Mw4uGc?si=JsvHGz--ovr1lud7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
         </iframe>
         </center>
         <h3> Welcome {this.state.sname} , fo React "state" </h3>
      </div>
    )
  }
}