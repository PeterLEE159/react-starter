import axios from 'axios';

const API_KEY = '38d210f0cf71f24398e9e4502e4eb8f1';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?apikey='+API_KEY;

export const SEARCH_WEATHER = 'SEARCH_WEATHER';
export function actionSearch(keyword) {
	const url = API_URL + '&q='+keyword+',us';
	console.log(url);
	const response = axios.get(url);

	const data = {
		type: SEARCH_WEATHER,
		payload: response,
	};
	
	
	return data;
}