import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export class Dashbaord extends React.Component {

  render() {
    return (
    <div className="dashboard">
        <div className="dashboard-protected-data">
           Hello
        </div>
    </div>
  );

  }

}


export default connect()(Dashbaord);