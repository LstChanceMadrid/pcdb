import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';


class UserNav extends Component {
	constructor(props) {
		super(props)
	}

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
					<div><Link to = {`/${this.props.user.username}/home`}>Home</Link></div>
					<div><Link to = "/:username/my-x">My X</Link></div>
					<div><a href="/" onClick={this.handleLogoutButtonClick}>Logout</a></div>
				</div>
			</nav>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user : {
			username : state.username
		}
	}
}

export default connect(mapStateToProps)(UserNav)