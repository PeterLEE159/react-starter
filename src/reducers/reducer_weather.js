import { SEARCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	
	switch(action.type) {
		case SEARCH_WEATHER:
			return [ action.payload.data, ...state];
	}

	return state;
} 