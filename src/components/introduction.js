import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './introduction.css';
import {connect} from 'react-redux';

export class Introduction extends React.Component {
    render () {

        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
          }
        const styles = {textAlign: 'center', 'textDecoration': 'none'};
        return (
            <div style={styles}>
                <p className="ready">Welcome to eTrendy, are you ready to explore most trendy products on the market ?</p>
                <button className="start"><Link className="startbutton" style={styles} to='/trending'>Let's Start</Link></button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
 });
  
export default connect(mapStateToProps)(Introduction);
  
