import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class UserNav extends Component {

	handleLogoutButtonClick = () => {
		delete localStorage.jsonwebtoken

	}

	render() {

		window.onscroll = () => {
			let navBar = document.getElementsByTagName('nav')
			console.log('hi')
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
					<div><a href="/home" onClick={this.handleLogoutButtonClick}>Logout</a></div>
				</div>
			</nav>
		)
	}
}
