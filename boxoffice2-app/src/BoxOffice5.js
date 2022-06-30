import React from "react";
import axios from "axios";
import SearchMovie from "../components/SearchMovie";
import "./Home.css";
import "./Search.css";
import { useState } from "react";
import { getMoviesFromNaver } from "./api";


function BoxOffice5() {
  const [state, setState] = useState({
    isLoading: true,
    movies: [],
    top10: [],
    arr: [],
  });


  const getSearchMovie = (title) => {
    if (!title) {
      setState({...state, top10:[], isLoading: false})
    } else {
      const response = getMoviesFromNaver({word:title, amout:10});
      setState({...state, top10:response.data})
    }
  }
}