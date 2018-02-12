import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser, setAuthToken } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import './header-bar.css';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(setCurrentUser(null));
    this.props.dispatch(setAuthToken(null));
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button className="logout" onClick={() => this.logOut()}>
          Log out
        </button>
      );
    }
    return (
      <div className="header-bar">
        <h1>&#x26C4; eTrendy</h1>
        <div className="log">{logOutButton}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
