import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
// import Logo from './Logo'
import Nav from './nav/Nav'
import UserNav from './nav/UserNav'


// const SEARCH_URL = 'http://localhost:5000/api/search'



export default class Header extends Component {

	state = {
		search : {}
	}

	handleSearchTextBoxOnChange = (e) => {

		this.setState({
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

		return (
		<header>
			<h1>Header</h1>

			<div  className="search-bar-container">
				<input className="search-bar"  type="text" onChange={this.handleSearchTextBoxOnChange} name="search" placeholder="Search" />

				<input className="magnifying-glass" type="submit" onClick = {this.handleSearchButton} value="" />
			</div>

			<Switch>
				<Route exact path="*/username/*" component={UserNav} />
				
				<Route exact path="/*" component={Nav} />
			</Switch>
			
		</header>
		)
	}
}
