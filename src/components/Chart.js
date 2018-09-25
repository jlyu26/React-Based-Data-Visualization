import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';

class ScoreChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: props.chartData,
			options: props.options
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ 
			chartData: nextProps.chartData,
			options: nextProps.options
		});  
	}

	render() {
		return (
			<div>
				<Bar
					data={this.state.chartData}
					options={this.state.options}
				/>
			</div>
		);
	}
}

class OffChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: props.chartData,
			options: props.options
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ 
			chartData: nextProps.chartData,
			options: nextProps.options
		});  
	}

	render() {
		return (
			<div>
				<Line
					data={this.state.chartData}
					options={this.state.options}
				/>
			</div>
		);
	}
}

class DefChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: props.chartData,
			options: props.options
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ 
			chartData: nextProps.chartData,
			options: nextProps.options
		});  
	}

	render() {
		return (
			<div>
				<Line
					data={this.state.chartData}
					options={this.state.options}
				/>
			</div>
		);
	}
}

export { ScoreChart, OffChart, DefChart };