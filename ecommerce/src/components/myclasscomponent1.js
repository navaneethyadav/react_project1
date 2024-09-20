import React, { Component } from 'react';

export default class MyClassComponent1 extends Component {
  render()
  {
    return (
      <div>
        <center>
          <h2>Student Data</h2>
        </center>
        <center>
        <table border = "4">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>shalu</td>
            </tr>
            <tr>
              <td>2</td>
              <td>tom</td>
            </tr>
          </tbody>
        </table>
        </center>
      </div>
    );
  }
}