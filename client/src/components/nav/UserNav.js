import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class UserNav extends Component {
	render() {
		return (
			<nav>
				<h1>User Nav</h1>
				
				<div className="nav-links-container">
					<div><Link to = "/home">Home</Link></div>
					<div><Link to = "/my-x">My X</Link></div>
					<div><Link to = "/logout">Logout</Link></div>
				</div>
			</nav>
		)
	}
}
