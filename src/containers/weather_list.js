import React, { Component } from 'react';

import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	constructor(props) {
		super(props);
	}
	renderWeather(weatherData) { // each row of weather list

		const name  = weatherData.city.name;
		const temps = weatherData.list.map(weather => weather.main.temp);
		const pressure = weatherData.list.map(weather => weather.main.pressure);
		const humidity = weatherData.list.map(weather => weather.main.humidity);
		const { lon, lat } = weatherData.city.coord;
		


		return (
			<tr key={name}>
				
				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td><Chart data={temps} color="orange" /></td>
				<td><Chart data={pressure} color="green" /></td>
				<td><Chart data={humidity} color="black" /></td>
			</tr>
		);
	}

	render() {
		console.log('render', this.props.weather);
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather } ) {
	
	return { weather }; // equivalent && identical to { weather: weather };
}

export default connect(mapStateToProps, null)(WeatherList);