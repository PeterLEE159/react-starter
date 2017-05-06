import { combineReducers } from 'redux';
import WeatherReducer from '../reducers/reducer_weather';


export default combineReducers({
  weather: WeatherReducer,
});
