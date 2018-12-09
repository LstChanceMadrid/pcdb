import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


class UserNav extends Component {

	handleLogoutButtonClick = () => {
		delete localStorage.jsonwebtoken
		delete localStorage.username
		delete localStorage.password
	}

	render() {

		window.onscroll = () => {
			let navBar = document.getElementsByTagName('nav')
			if (window.scrollY > 30) {
				navBar[0].classList.add('sticky')
		} else {
			navBar[0].classList.remove('sticky')
		}
	}

		return (
			<nav className="nav-bar">
				<h1>User Nav</h1>
				
				<div  className="nav-links-container">
					<div><Link to = "/home">Home</Link></div>
					<div><Link to = "/my-x">My X</Link></div>
					<div><a href="/" onClick={this.handleLogoutButtonClick}>Logout</a></div>
				</div>
			</nav>
		)
	}
}



export default connect()(UserNav)