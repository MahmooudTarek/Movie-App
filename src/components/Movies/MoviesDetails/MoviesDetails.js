import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillHeart, AiOutlineHeart ,AiFillStar} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addFavorites, deleteFavorites } from "../../../Store/Actions/Favorites";


function MoviesDetails(movie,favoriteValue) {
  const params = useParams();
  const placeholderImg = "https://image.tmdb.org/t/p/w1280";
  // console.log(params);
  const [moviesDetails, setMoviesDetails] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}?`, {
        params: {
          api_key: "cbcf56862fcb0e4ecc35bd2e8e3e6b90",
        },
      })
      .then((res) => setMoviesDetails(res.data))
      .catch((err) => console.log("err ", err));
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={placeholderImg + moviesDetails.poster_path}
              className="card-img-top"
              alt="..."
              style={{
                width: "100%",
                height: "500px",
                objectFit: "contain",
                margin: "2rem 0",
              }}
            />
          </div>
          <div className="col-md-6">
            <div className="my-5 row p-5">
            <h2 className="text-warning  text-opacity-100">{moviesDetails.title}</h2>
            <h6 className="text-light text-opacity- mt-3">{moviesDetails.overview}</h6>
            <h5 className="text-warning mt-5" style={{
             
              }}><span className="text-light text-capitalize text-opacity-75"> Rate :  </span>{moviesDetails.vote_average} < AiFillStar/></h5>
            <h5 className="text-warning" style={{
        
              }}><span className="text-light text-capitalize text-opacity-75"> Release date :   </span>{moviesDetails.release_date}</h5>
           
           <h5 className="text-warning " style={{
             
            }}><span className="text-light text-capitalize text-opacity-75">  Language : </span>{moviesDetails.original_language
            }</h5>




            </div>
          </div>
        </div >
      </div>{" "}
      {/* end of container */}
    </>
  );
}
export default MoviesDetails;
// original_language
