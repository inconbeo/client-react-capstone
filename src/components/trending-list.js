import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchProtectedData, fetchAddItem} from '../actions/protected-data';
import NavBar from './nav-bar';
import Dashboard from './dashboard';
import AddItemButton from './add-item-button';
import './trending-list.css';
export class TrendingList extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        this.props.dispatch(fetchProtectedData());
    }
    
    addToDatabase(itemId) {
        console.log('hello', itemId )
        //fetch to the api
        this.props.dispatch(fetchAddItem(itemId));
      }

    render() {
        const trending = this.props.protectedData.map((product, index) => <li className="items-list" 
        key={index}>
        <img key={index} src={`${product.mediumImage}`} alt="" className="img-responsive"/>
        <div>${product.salePrice}</div>
        <div>{product.name}</div>
        {/* <button type="button" className="addButton">Add to Portfolio</button> */}
        <AddItemButton itemId={product.itemId} onClick={(itemId) => this.addToDatabase(itemId)}/>
      </li>);
      
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
