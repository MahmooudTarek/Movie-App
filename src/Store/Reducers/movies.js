const INITIAL_STATE = {
    movies: [],
  };
  
  export default function moviesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "GET_MOVIES":
        return {
          ...state,
          movies: action.payload,
        };
  
      case "SEARCH_MOVIE":
        return {
          ...state,
          movies: action.payload,
        };
  
      case "SET_LANGUAGE":
        return {
          ...state,
          movies: action.payload,
        };
  
      default:
        return state;
    }
  }
  