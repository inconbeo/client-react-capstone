import React from 'react';
import store from '../store';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchProtectedData, fetchUserList, deleteWishListItem} from '../actions/protected-data';
import {updateCurrentUser} from '../actions/auth'
import DeleteItemButton from './delete-button';
import NavBar from './nav-bar';



export class Dashboard extends React.Component {

    componentWillReceiveProps(nextProps) {
      if(this.props.loggedIn === false && nextProps.loggedIn === true){
        this.props.dispatch(fetchUserList());
      }
    }
    componentWillMount() {
      if(this.props.loggedIn){
        this.props.dispatch(fetchUserList());
      }
    }
    
    deleteItem(itemId) {
      this.props.dispatch(deleteWishListItem(itemId));
  }

    
  render() {
    const products = this.props.dashboardData.map((product, index) => <li className="items-list" 
    key={index}>
    <a href={product.productUrl}><img key={index} src={`${product.mediumImage}`} alt="" className="img-responsive"/>
    <div>${product.salePrice}</div>
    <div>{product.name}</div>

    <DeleteItemButton itemId={product.itemId} onClick={(itemId) => this.deleteItem(itemId)}/>
  

    </a>
    
 </li>);

if(this.props.dashboardData && products.length === 0) {
  console.log('length', products.length);
}

  // Only visible to logged in users
  if (!this.props.loggedIn) {
    return <Redirect to="/" />;
}
    return (
    <div className="dashboard">
        <div className="dashboard-protected-data">
          <NavBar/>
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
      dashboardData: state.protectedData.dashboardData
  };
  
};
export default connect(mapStateToProps)(Dashboard);