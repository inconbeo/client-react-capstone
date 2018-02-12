import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchProtectedData, fetchAddItem } from '../actions/protected-data';
import NavBar from './nav-bar';
import AddItemButton from './add-item-button';
import { ClipLoader } from 'react-spinners';
import './trending-list.css';


export class TrendingList extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(fetchProtectedData());
  }

  addToDatabase(itemId) {
    //fetch to the api
    this.props.dispatch(fetchAddItem(itemId));
  }

  render() {
    const styles = {'textAlign': 'center'}
    if(this.props.loading){
      return (
        <div className='loading' style={styles}>
          <ClipLoader
            color={'#0D8FA7'}
            loading={this.props.loading} 
          />
        </div>
      )
    }

    const trending = this.props.protectedData.map((product, index) => (
      <div className="items-list" key={index}>
        <a href={product.productUrl}>
          <img
            key={index}
            src={`${product.mediumImage}`}
            alt=""
            className="image"
          />
          <div className="price">${product.salePrice}</div>
          <div className="name">{product.name}</div>

          <AddItemButton
            item={product}
            onClick={() => this.addToDatabase(product)}
          />
        </a>
      </div>
    ));

    if (this.props.protectedData && trending.length === 0) {
      console.log('length', trending.length);
    }

    // Only visible to logged in users
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="dashboard">
        <NavBar />
        <div className="dashboard-protected-data">
          <ul>{trending}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { currentUser } = state.auth;
  return {
    loggedIn: currentUser !== null,
    protectedData: state.protectedData.data,
    loading: state.protectedData.loading
  };
};

export default connect(mapStateToProps)(TrendingList);
