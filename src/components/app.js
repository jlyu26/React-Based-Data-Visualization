import React, { Component } from 'react';

import SearchBar from "../containers/search_bar";
import ChartList from "../containers/chart_list";

export default class App extends Component {
	render() {
		return (
			<div>
				<SearchBar />
				<ChartList />
			</div>
		);
	}
}