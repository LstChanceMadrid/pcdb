import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
// import Logo from './Logo'
import Nav from './header/Nav'
import UserNav from './header/UserNav'



// const SEARCH_URL = 'http://localhost:5000/api/search'



class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			...this.state,
			search : {}
		}
	}

	handleSearchTextBoxOnChange = (e) => {

		this.setState({
			...this.state,
			search : {
				...this.state.search,
				[e.target.name] : e.target.value
			}
		})
	}

	handleSearchButton = () => {

		// let search = this.state.search

		// fetch(SEARCH_URL, {
		//   method : "POST",
		//   headers : {
		// 	"Content-Type" : 'application/json'
		//   },
		//   body : JSON.stringify(search)
		// }).then(response => {
		// 	return response.json()
		// }).then(result => {
		// 	let search = result.result
		// 	let searchResult = []
		// 	search.map(element => {
		// 		Object.keys(element).forEach(key => {
		// 			searchResult.push(element[key])
		// 		})
		// 		this.setState({
		// 			search : searchResult
		// 		})
		// 	});
		// })
	  }




	render() {
		let header = () => { 
			return (
			<div className="header">
				<h1>Header</h1>

				<div  className="search-bar-container">
					<input className="search-bar"  type="text" onChange={this.handleSearchTextBoxOnChange} name="search" placeholder="Search" />

					<input className="magnifying-glass" type="submit" onClick = {this.handleSearchButton} value="" />
				</div>
			</div>
			)
		}

		if (localStorage.getItem('jsonwebtoken')) {
			return (
				<header>
					{header()}

					<Route path="/:username/" component={UserNav} />
				</header>
			)

		} else {
			return (
				<header>
					{header()}
					
					<Route exact path="/*" component={Nav} />
				</header>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		user : {
			username : state.user.username
		}
	}
}

export default connect(mapStateToProps)(Header)