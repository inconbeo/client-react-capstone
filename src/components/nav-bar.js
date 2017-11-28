import React, { Component } from 'react'
import './nav-bar.css'

export default class NavBar extends Component {
  render() {
    return (
        <div className='navbar-div'>
            <nav className='navbar-main'>
                <div className='navbar-ul'>
                    <ul className='navbar-list'>
                        <li className='nav-item'><a className='nav-link' href='/'>Trending Products</a></li>
                        <li className='nav-item'><a className='nav-link' href='/dashboard'>Dashboard</a></li>
                        {/* <li className='nav-item'><a className='nav-link' href='/sign-in'>Sign In</a></li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
  }
}

