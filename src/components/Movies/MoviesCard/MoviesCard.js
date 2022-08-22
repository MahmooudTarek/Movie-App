import "./movies.css";
import { Link, useHistory } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart ,AiOutlinePlayCircle} from "react-icons/ai";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { addFavorites, deleteFavorites } from "../../../Store/Actions/Favorites";



function MoviesCard({movie,favoriteValue}) {
    const placeholderImg = "https://image.tmdb.org/t/p/w1280"
    // console.log("movie :",movie)
    const history=useHistory()
     
    function GetMovieDetails(e){
        console.log("clicked")
        history.push(`/MovieDetails/${movie.id}`)
        }
      
    const dispatch = useDispatch();
    const [favs, setFavs] = useState(false);
    const toggleFav = (movieId) => {
    setFavs(!favs);
    if (!favs && !favoriteValue) {
      dispatch(addFavorites(movie));
    } else {
      dispatch(deleteFavorites(movieId));
    }
  };


  
  return (
    <>
      <div className="card h-100 m-1 bg-dark text-center align-content-center   "  >
        <img onClick={(e)=>{GetMovieDetails(e)}} 
         src={placeholderImg+movie.poster_path} className="card-img-top" alt="..."/>

        <div className="card-body text-center text-capitalize ">
          <h4 className="card-title text-primary text-capitalize text-center text-light text-opacity-75 font-italic ">{movie.title}</h4>
          <div className="cardfav  row d-flex d-inline justify-content-center align-content-center mt-2 text-center  ">
          
          
          <h5 className="card-text text-warning m-auto d-flex justify-content-center align-content-center">
            {movie.release_date}
          </h5>
          
          <div
          
          className="fav-btn d-flex justify-content-center align-content-center"
          onClick={() => {
            toggleFav(movie.id);
          }}
        >

          {favoriteValue ? (
            <AiFillHeart fontSize={35} color={"#dc353f"} />
          ) : favs ? (
            <AiFillHeart fontSize={35} color={"#dc353f"} />
          ) : (
            <AiOutlineHeart fontSize={35} color={"#dc353f"} />
          )}
          {/* <Link to={`/movieDetails/${movie.id}`}  className="link">Details ...</Link> */}
        </div>

        </div>
        </div>
      </div>
      
    </>
  );
}

export default MoviesCard
