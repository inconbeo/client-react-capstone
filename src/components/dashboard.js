import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchProtectedData, fetchUserList, deleteWishListItem} from '../actions/protected-data';
import {updateCurrentUser} from '../actions/auth'
import DeleteItemButton from './delete-button';



export class Dashboard extends React.Component {

    componentWillReceiveProps(nextProps) {
      if(this.props.loggedIn === false && nextProps.loggedIn === true){
        console.log('Line 19')
        this.props.dispatch(fetchUserList());

      }
    }
    
    deleteItem(itemId) {
      console.log('helloDelete', itemId);
      this.props.dispatch(deleteWishListItem());
  }

    
  render() {
    const products = this.props.protectedData.map((product, index) => <li className="items-list" 
    key={index}>
    <a href={product.productUrl}><img key={index} src={`${product.mediumImage}`} alt="" className="img-responsive"/>
    <div>${product.salePrice}</div>
    <div>{product.name}</div>

    <DeleteItemButton itemId={product.itemId} onClick={(itemId) => this.deleteItem(itemId)}/>
  

    </a>

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
  console.log('===============', state.auth)
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