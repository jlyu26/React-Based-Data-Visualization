import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ScoreChart, OffChart, DefChart } from '../components/Chart';

class ChartList extends Component {
	constructor(props) {
		super(props);
		this.toggleScoreDisplay = this.toggleScoreDisplay.bind(this);
		this.toggleOffDisplay = this.toggleOffDisplay.bind(this);
		this.toggleDefDisplay = this.toggleDefDisplay.bind(this);
		this.state = {
			player: '',
			scoreChartChecked: true,
			scoreChartData: {},
			scoreChartOptions: {},
			offChartChecked: false,
			offChartData: {},
			offChartOptions: {},
			defChartChecked: false,
			defChartData: {},
			defChartOptions: {}
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.data !== prevProps.data) {
			this.generateData(this.props);
		}
	}

	toggleScoreDisplay() {
		this.setState({
      scoreChartChecked: !this.state.scoreChartChecked
    })
	}

	toggleOffDisplay() {
		this.setState({
      offChartChecked: !this.state.offChartChecked
    })
	}

	toggleDefDisplay() {
		this.setState({
      defChartChecked: !this.state.defChartChecked
    })
	}

	generateData(props) {
		const playerName = `${props.data[0].player.FirstName} ${props.data[0].player.LastName}`;
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
			player: playerName,
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
					text: 'Offensive Rebound, Assist, Turnover, Blocked'
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
		const scoreChart = this.state.scoreChartChecked 
			? <ScoreChart className="offense-data" chartData={this.state.scoreChartData} options={this.state.scoreChartOptions} />
			: null;
		const offChart = this.state.offChartChecked 
			? <OffChart className="offense-data" chartData={this.state.offChartData} options={this.state.offChartOptions} />
			: null;
		const defChart = this.state.defChartChecked
			? <DefChart className="defense-data" chartData={this.state.defChartData} options={this.state.defChartOptions} />
			: null;
		return (
			<div>
				<form className="checkbox form-inline">
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" checked={this.state.scoreChartChecked} onChange={this.toggleScoreDisplay}/>
						<label className="form-check-label" htmlFor="scoreChartDataDisplay">Score</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" checked={this.state.offChartChecked} onChange={this.toggleOffDisplay}/>
						<label className="form-check-label" htmlFor="offChartDataDisplay">Other Offense Data</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" checked={this.state.defChartChecked} onChange={this.toggleDefDisplay}/>
						<label className="form-check-label" htmlFor="defChartDataDisplay">Defense Data</label>
					</div>
				</form>

				<h3 className="title text-center">{`${this.state.player} Last 7 Games Log`}</h3>
				{ scoreChart }
				{ offChart }
				{ defChart }		
			</div>
		);
	}
}

function mapStateToProps({ data }) {
	return { data };
}

export default connect(mapStateToProps)(ChartList);