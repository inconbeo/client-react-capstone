import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchProtectedData, fetchAddItem, fetchAddItemSuccess } from '../actions/protected-data';
import NavBar from './nav-bar';
import Dashboard from './dashboard';
import AddItemButton from './add-item-button';
import ReactLoading from 'react-loading'

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
         if(this.props.protectedData.length < 1) {
            <ReactLoading className='loader' type={'spinningBubbles'} color={'#000'} height='300' width='375' />   
         }
        const trending = this.props.protectedData.map((product, index) => <li className="items-list" 
        key={index}>
        <a href={product.productUrl}><img key={index} src={`${product.mediumImage}`} alt="" className="img-responsive"/>
        <div>${product.salePrice}</div>
        <div>{product.name}</div>

        <AddItemButton item={product} onClick={() => this.addToDatabase(product)}/>
       </a>

      </li>);
       
       if(this.props.protectedData && trending.length === 0) {
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
                    hello from trending
                    <ul>{trending}</ul>
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


export default connect(mapStateToProps)(TrendingList);
