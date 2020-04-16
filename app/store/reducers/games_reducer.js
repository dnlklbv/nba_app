import {GET_GAMES} from '../types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
}
