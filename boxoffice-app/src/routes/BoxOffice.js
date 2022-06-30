import React from "react";
import axios from "axios";
import SearchMovie from "../components/SearchMovie";
import "./Home.css";
import "./Search.css";

class BoxOffice extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    top10: [],
    arr: [],
  };

  getSearchMovie = async (title) => {
    const ID_KEY = "Yl6uwVUv0izsX17iuY45";
    const SECRET_KEY = "udIXNnhVFG";
    let item = {};
    // const search = this.state.value;
    try {
      if (title === "") {
        this.setState({ top10: [], isLoading: false });
      } else {
        const {
          data: { items },
        } = await axios.get("/v1/search/movie.json", {
          params: {
            query: title,
            display: 1,
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
          },
        });
        console.log(items[0]);
        item = items[0];
        return item;
      }
    } catch (error) {
      console.log(error);
    }
  };

  getBoxOffice = async () => {
    function getToday() {
      var date = new Date();
      var year = date.getFullYear();
      var month = ("0" + (1 + date.getMonth())).slice(-2);
      var day = ("0" + date.getDate()).slice(-2) - 1;

      return year + month + day;
    }
    var date = getToday();
    // console.log(date);
    var urlStr =
      "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=3db39eb1eb85ed2bb889e787679d69c2&targetDt=" +
      date;
    const {
      data: {
        boxOfficeResult: { dailyBoxOfficeList },
      },
    } = await axios.get(urlStr);
    this.setState({ movies: dailyBoxOfficeList, isLoading: false });
  };

  componentDidMount() {
    const arr = [];
    const { isLoading, movies, top10 } = this.state;

    this.getBoxOffice();
    console.log(movies);
    for (var i = 0; i < movies.length; i++) {
      arr.push(this.getSearchMovie(movies[i].movieNm));
    }
    this.setState({ top10: arr });
    console.log(this.state.top10);
  }

  render() {
    // let arr = [];

    // this.state.arr = Promise.all(this.state.top10).then((data) => {
    //   const response = data;
    //   return response;
    // });
    const { isLoading, movies, top10 } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading..</span>
          </div>
        ) : (
          <div className="movies">
            {this.state.top10.Promise.PromiseResult.map((movie) => {
              if (movie.image) {
                return (
                  <SearchMovie
                    key={movie.link}
                    id={movie.link}
                    year={movie.pubDate}
                    title={movie.title}
                    poster={movie.image}
                    rating={movie.userRating}
                    director={movie.director}
                    actor={movie.actor}
                  />
                );
              }
            })}
          </div>
        )}
      </section>
    );
  }
}

export default BoxOffice;
