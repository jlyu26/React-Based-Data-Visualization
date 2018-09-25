import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ScoreChart, OffChart, DefChart } from '../components/Chart';

class ChartList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scoreChartData: {},
			scoreChartOptions: {},
			offChartData: {},
			offChartOptions: {},
			defChartData: {},
			defChartOptions: {}
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.data !== prevProps.data) {
			this.generateData(this.props);
		}
	}

	generateData(props) {
		const recentGames = props.data.slice(-7);
		const stat = {
			labels: [],
			threePointers: [],
			twoPointers: [],
			freeThrows: [],
			assists: [],
			offRebs: [],
			blkAgn: [],
			turnovers: [],
			blocks: [],
			defRebs: [],
			steals: [],
			fouls: []
		};
		
		for (let i = 0; i < 7; i++) {
			stat.labels.push(`${recentGames[i].game.awayTeam.Abbreviation}@${recentGames[i].game.homeTeam.Abbreviation}`);
			
			stat.threePointers.push(Number(recentGames[i].stats.Fg3PtMade["#text"]) * 3);
			stat.twoPointers.push(Number(recentGames[i].stats.Fg2PtMade["#text"]) * 2);
			stat.freeThrows.push(Number(recentGames[i].stats.FtMade["#text"]) * 1);

			stat.assists.push(Number(recentGames[i].stats.Ast["#text"]));
			stat.offRebs.push(Number(recentGames[i].stats.OffReb["#text"]));
			stat.blkAgn.push(Number(recentGames[i].stats.BlkAgainst["#text"]));
			stat.turnovers.push(Number(recentGames[i].stats.Tov["#text"]));

			stat.blocks.push(Number(recentGames[i].stats.Blk["#text"]));
			stat.defRebs.push(Number(recentGames[i].stats.DefReb["#text"]));
			stat.steals.push(Number(recentGames[i].stats.Stl["#text"]));
			stat.fouls.push(Number(recentGames[i].stats.FoulPers["#text"]));
		}
		this.setState({
			scoreChartData: {
				labels: stat.labels,
				datasets: [
					{
						label: '3P Score',
						borderWidth: 2,
						backgroundColor: 'rgba(151,187,205,0.8)',
						borderColor: 'rgba(151,187,205,1)',
						data: stat.threePointers
					},
					{
						label: '2P Score',
						borderWidth: 2,
						backgroundColor: "rgba(220,220,220,0.8)",
						borderColor: "rgba(220,220,220,1)",
						data: stat.twoPointers
					},
					{
						label: 'FT Score',
						borderWidth: 2,
						backgroundColor: "rgba(70,191,189,0.8)",
						borderColor: "rgba(70,191,189,1)",
						data: stat.freeThrows
					}
				]
			},
			scoreChartOptions: {
				title: {
					display: true,
					fontSize: 20,
					text: 'Score Data'
				},
				scales: {
					xAxes: [{
							stacked: true
					}],
					yAxes: [{
							stacked: true
					}]
				}
			},
			offChartData: {
				labels: stat.labels,
				datasets: [
					{
						label: 'OFF REB',
						backgroundColor: 'rgba(151,187,205,0.8)',
						borderWidth: 2,
						borderColor: 'rgba(151,187,205,1)',
						fill: false,
						data: stat.offRebs
					},
					{
						label: 'AST',
						backgroundColor: 'rgba(70,191,189,0.8)',
						borderWidth: 2,
						borderColor: 'rgba(70,191,189,1)',
						fill: false,
						data: stat.assists
					},
					{
						label: 'TO',
						backgroundColor: 'rgba(247,70,74,0.8)',
						borderWidth: 2,
						borderColor: "rgba(247,70,74,1)",
						fill: false,
						data: stat.turnovers
					},
					{
						label: 'BLK AGN',
						backgroundColor: 'rgba(253,180,92,0.8)',
						borderWidth: 2,
						borderColor: "rgba(253,180,92,1)",
						fill: false,
						data: stat.blkAgn
					}
				]
			},
			offChartOptions: {
				title: {
					display: true,
					fill: true,
					fontSize: 20,
					text: 'Offensive Rebound, Assist, Turnover, Block Against'
				}
			},
			defChartData: {
				labels: stat.labels,
				datasets: [
					{
						label: 'DEF REB',
						backgroundColor: 'rgba(151,187,205,0.8)',
						borderWidth: 2,
						borderColor: 'rgba(151,187,205,1)',
						fill: false,
						data: stat.defRebs
					},
					{
						label: 'BLK',
						backgroundColor: 'rgba(70,191,189,0.8)',
						borderWidth: 2,
						borderColor: 'rgba(70,191,189,1)',
						fill: false,
						data: stat.blocks,
					},
					{
						label: 'STL',
						backgroundColor: 'rgba(96,209,224,0.8)',
						borderWidth: 2,
						borderColor: "rgba(96,209,224,1)",
						fill: false,
						data: stat.steals
					},
					{
						label: 'FOUL',
						backgroundColor: 'rgba(253,180,92,0.8)',
						borderWidth: 2,
						borderColor: "rgba(253,180,92,1)",
						fill: false,
						data: stat.fouls
					}
				]
			},
			defChartOptions: {
				title: {
					display: true,
					fill: true,
					fontSize: 20,
					text: 'Defensive Rebound, Block, Steal, Foul'
				}
			}
		});
	}

	render() {
		return (
			<div>
				<ScoreChart chartData={this.state.scoreChartData} options={this.state.scoreChartOptions} />
				<OffChart chartData={this.state.offChartData} options={this.state.offChartOptions} />
				<DefChart chartData={this.state.defChartData} options={this.state.defChartOptions} />
			</div>
		);
	}
}

function mapStateToProps({ data }) {
	return { data };
}

export default connect(mapStateToProps)(ChartList);