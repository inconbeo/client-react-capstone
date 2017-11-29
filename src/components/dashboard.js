import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchProtectedData, fetchUserList} from '../actions/protected-data';
import {updateCurrentUser} from '../actions/auth'


export class Dashboard extends React.Component {

    componentWillReceiveProps(nextProps) {
      if(this.props.loggedIn === false && nextProps.loggedIn === true){
        console.log('Line 19')
      this.displayUserList()
      }
    }
    
    displayUserList() {
        //fetch to the api
        this.props.dispatch(fetchUserList());
      }

  render() {
    const products = this.props.protectedData.map((product, index) => <li className="items-list" 
    key={index}>
    <img key={index} src={`${product.mediumImage}`} alt="" className="img-responsive"/>
    <div>${product.salePrice}</div>
    <div>{product.name}</div>
    {/* <button type="button" className="addButton">Add to Portfolio</button> */}
  </li>);
    return (
    <div className="dashboard">
        <div className="dashboard-protected-data">
          <p>Hello from dashboard</p>
          <ul>{products}</ul>
        </div>
    </div>
  );

  }

}

const mapStateToProps = (state, props) => {
  const {currentUser} = state.auth;
  return {
      loggedIn: currentUser !== null,
      // username: currentUser ? state.auth.currentUser.username : '',
      // name: currentUser
      //     ? `${currentUser.firstName} ${currentUser.lastName}`
      //     : '',
      protectedData: state.protectedData.data,
  };
  
};
export default connect(mapStateToProps)(Dashboard);