import "./navStyle.css";
import { useSelector } from "react-redux";
import { useEffect, useState, useContext } from "react";
import { LangContext } from "../../LanContext";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import {AiTwotoneVideoCamera } from "react-icons/ai";
import axios from "axios";
import {  setDataLanguage } from "../../Store/Actions/movies";
import { useDispatch } from "react-redux";

// import {  useState } from "react";

import { Link } from "react-router-dom";

function NavComponent(data, setData) {
  const favorites = useSelector((state) => state.fav.favorites);
  const [originalData, setOriginalDat] = useState([]);
  const favs = useSelector((state) => state.favorites);
  const { language, setLanguage } = useContext(LangContext);
  const dispatch = useDispatch();
  const fetchData = () => {
    axios
      .get(
        `
https://api.themoviedb.org/3/movie/popular?api_key=aba64fca8b572c7c58473255b665deef&page=1&language=${language}`
      )
      .then((res) => {
        console.log("lang data", res.data.results);
        setData(res.data.results);
        console.log(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
    console.log("current:", language);
  }, [language]);

  // useEffect(() => {
  //   if (originalData.length == 0) {
  //     setOriginalDat([...data]);
  //   }

  
  // }  )
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
        <div className="container-fluid d-flex align-align-items-center">
          <a className="navbar-brand text-alert-light text-warning fs-1 form-control-plaintext fw-bolder font-italic 	" href="/"> Best Movies   <AiTwotoneVideoCamera style={{color:"red"}}/> </a>
          <select
          onChange={(e) => {
            console.log(e)
            dispatch(setDataLanguage(e.target.value));
          }}
        >
          <option defaultValue="en">en</option>
          <option value="fr">fr</option>
          <option value="ar">ar</option>
        </select>
        <Navbar.Toggle aria-controls="navbarScroll" />
   
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Movies" className="nav-link navLink ">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favorites" className="nav-link navLink">
                  Favorites
                  {favorites.length > 0 ?<span className="favLength">{favorites.length}</span>:""}
                  
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              {/* <input
                className="form-control me-2 search-input"
                type="search"
                placeholder="Search"
                aria-label="Search" */}
              {/* /> */}
               <Link to="/search" className="nav-link text-light text-opacity-75   ">Search</Link>
              {/* <button
                className="btn btn-outline-primary bg-light search_btn"
                type="submit"
              >
               Log Out
              </button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavComponent;
