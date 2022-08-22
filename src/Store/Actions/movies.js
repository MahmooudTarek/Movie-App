import axios from "axios";

export const getMovies = () => (dispatch) => {
  return axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=aba64fca8b572c7c58473255b665deef"
    )
    .then((res) => {
      dispatch({
        type: "GET_MOVIES",
        payload: res.data.results,
      });
      console.log("result ------------->", res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchMovie = (value) => (dispatch) => {
  console.log("search movie");
  return axios
    .get(
      value
        ? `https://api.themoviedb.org/3/search/movie?api_key=aba64fca8b572c7c58473255b665deef&query=${value}`
        : "https://api.themoviedb.org/3/movie/popular?api_key=aba64fca8b572c7c58473255b665deef"
    )
    .then((res) => {
      dispatch({
        type: "SEARCH_MOVIE",
        payload: res.data.results,
      });
      console.log("result ------------->", res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setDataLanguage = (value) => (dispatch) => {
  console.log("lang action");
  return axios
    .get(
      value
        ? `https://api.themoviedb.org/3/movie/popular?api_key=aba64fca8b572c7c58473255b665deef&page=1&language=${value}`
        : "https://api.themoviedb.org/3/movie/popular?api_key=aba64fca8b572c7c58473255b665deef"
    )
    .then((res) => {
      dispatch({
        type: "SET_LANGUAGE",
        payload: res.data.results,
      });
      console.log("result ------------->", res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};
