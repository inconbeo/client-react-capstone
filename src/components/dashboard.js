import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchUserList, deleteWishListItem } from '../actions/protected-data';
import DeleteItemButton from './delete-button';
import NavBar from './nav-bar';
import './dashboard.css';

export class Dashboard extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.loggedIn === false && nextProps.loggedIn === true) {
      this.props.dispatch(fetchUserList());
    }
  }
  componentWillMount() {
    if (this.props.loggedIn) {
      this.props.dispatch(fetchUserList());
    }
  }

  deleteItem(itemId) {
    this.props.dispatch(deleteWishListItem(itemId));
  }

  render() {
    const products = this.props.dashboardData.map((product, index) => (
      <li className="items-list" key={index}>
        <a href={product.productUrl}>
          <img
            key={index}
            src={`${product.mediumImage}`}
            alt=""
            className="image"
          />
          <div className="price">${product.salePrice}</div>
          <div className="name">{product.name}</div>

          <DeleteItemButton
            itemId={product.itemId}
            onClick={itemId => this.deleteItem(itemId)}
          />
        </a>
      </li>
    ));

    if (this.props.dashboardData && products.length === 0) {
      console.log('length', products.length);
    }

    // Only visible to logged in users
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    if (this.props.dashboardData.length === 0) {
      return (
        <div className="zeroItemDisplay">
          <h1 className="zeroWishlistText">
            {this.props.auth.currentUser.username.toUpperCase()}'S WISHLIST
          </h1>

          <h1>Please add items to your wishlist</h1>
          <button className="trendingButton">
            <Link to="/">Go To Trending Products</Link>
          </button>
        </div>
      );
    }
    return (
      <div className="dashboard">
        <NavBar />
        <h1 className="dashname">
          {this.props.auth.currentUser.username.toUpperCase()}'S WISHLIST
        </h1>

        <div className="dashboard-protected-data">
          <ul>{products}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { currentUser } = state.auth;
  return {
    loggedIn: currentUser !== null,
    // username: currentUser ? state.auth.currentUser.username : '',
    // name: currentUser
    //     ? `${currentUser.firstName} ${currentUser.lastName}`
    //     : '',
    protectedData: state.protectedData.data,
    dashboardData: state.protectedData.dashboardData,
    auth: state.auth
  };
};
export default connect(mapStateToProps)(Dashboard);
