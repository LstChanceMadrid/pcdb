import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class UserNav extends Component {


	handleLogoutButtonClick = () => {
		delete localStorage.jsonwebtoken

	}



	render() {
		return (
			<nav>
				<h1>User Nav</h1>
				
				<div className="nav-links-container">
					<div><Link to = "/home">Home</Link></div>
					<div><Link to = "/my-x">My X</Link></div>
					<div><a href="/home" onClick={this.handleLogoutButtonClick}>Logout</a></div>
				</div>
			</nav>
		)
	}
}
