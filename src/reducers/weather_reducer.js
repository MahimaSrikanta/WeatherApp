import { FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {   //  application state 
	switch(action.type) {
	  case FETCH_WEATHER:
      return [...state, action.payload.data];
	}
	return state;
}
