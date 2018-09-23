import axios from 'axios';

import { api_key, username, password } from '../../config/keys';

const API_KEY = api_key;
const ROOT_URL = `https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/player_gamelogs.json`;

export const FETCH_DATA = "FETCH_DATA";

export function fetchData(player) {
	const url = `${ROOT_URL}?player=${player}`;
	const request = axios({
		headers: {
		  'Content-Type': 'application/json'
		},
		method: 'get',
		url: url,
		auth: {
		  username,
		  password
		}
	});

	return {
		type: FETCH_DATA,
		payload: request
	};
}