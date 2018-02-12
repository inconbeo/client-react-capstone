import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './registration-page.css';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/trending" />;
  }
  return (
    <div className="home">
      <h2>Create Account</h2>
      <RegistrationForm />
      <p className="accountText">Already have an account?</p>
      <button className="loginButton">
        <Link to="/">Login</Link>
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
