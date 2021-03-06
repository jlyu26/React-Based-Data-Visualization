import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/index';

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };	// value of the input mapped to `this.state.term`
		this.onInputChange = this.onInputChange.bind(this);	// for the callback
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.fetchData(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group search-bar">
				<input
					placeholder="e.g. Kyrie-Irving, or Irving"
				 	className="form-control"
				 	value={this.state.term}
				 	onChange={this.onInputChange}
				 />
				<div className="input-group-append">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</div>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);