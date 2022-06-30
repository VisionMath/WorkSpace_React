import React from "react";
import axios from "axios";
import SearchMovie from "../components/SearchMovie";
import "./Home.css";
import "./Search.css";

class BoxOffice3 extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    top10: [],
    titles: []
  };

  getSearchMovie = async (title) => {
    const ID_KEY = "Yl6uwVUv0izsX17iuY45";
    const SECRET_KEY = "udIXNnhVFG";
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
        console.log(items[0].title);
        return items[0].title;
        // this.state.titles.push(items[0].title);
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

    return dailyBoxOfficeList
    this.setState({ movies: dailyBoxOfficeList, isLoading: false });
  };

  componentDidMount() {
    // this.setState(this.getDailyBoxOfficeList);
    this.getBoxOffice();
  }

  render() {
    const { isLoading, movies, top10 } = this.state;
    console.log(movies);
    movies.map((movie) => {
      this.state.titles.push(this.getSearchMovie(movie.movieNm));
    });
    console.log(this.state.titles);
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading..</span>
          </div>
        ) : (
          <div>
            {top10.map((movie) => {
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

export default BoxOffice3;
