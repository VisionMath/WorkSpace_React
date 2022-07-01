import React, { Component } from "react";
import axios from "axios";
import SearchMovie from "../components/SearchMovie";
// import { useNavigate } from 'react-router-dom';
import { withRouter } from "./withRouter";
import "./Home.css";
import "./Search.css";

class BoxOffice2 extends Component {
  state = {
    isLoading: true,
    movies: [],
    top10: [],
    arr: [],
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getBoxOffice();
  }

  getSearchMovie = async (title) => {
    const ID_KEY = "Yl6uwVUv0izsX17iuY45";
    const SECRET_KEY = "udIXNnhVFG";
    try {
      if (title === "") {
        this.setState({ top10: [], isLoading: false });
      } else {
        await axios.get("https://openapi.naver.com/v1/search/movie.json", {
          params: {
            query: title,
            display: 1,
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
          },
        }).then((response) => {
          const { data: { items } } = response;
          this.setState({ ...this.state, top10: [...this.state.top10, items[0]] })
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  getBoxOffice = async () => {
    function getYesterday() {
      var date = new Date();
      var year = date.getFullYear();
      var month = 1 + date.getMonth();
      var day = date.getDate();
      if (day != 1) {
        day -= 1;
      } else if (month == 1) {
        year -= 1;
        month = 12;
        day = 31;
      } else {
        month -= 1;
        day = (month == 2) ? 28 : (month == 4 || month == 6 || month == 9 || month == 11) ? 30 : 31;
      }
      month = ("0" + month).slice(-2);
      day = ("0" + day).slice(-2);

      var yesterday = year + month + day;
      console.log(yesterday);
      return yesterday;
    }
    var date = getYesterday();
    console.log('date: ', date);
    var urlStr =
      "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=3db39eb1eb85ed2bb889e787679d69c2&targetDt=" +
      date;
    await axios.get(urlStr).then((response) => {
      const {
        data: {
          boxOfficeResult: { dailyBoxOfficeList },
        },
      } = response;
      dailyBoxOfficeList.map((movie) => this.getSearchMovie(movie.movieNm));
    });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.state.value;
    this.props.navigate("/search", { state: { value: value } });
  };

  render() {
    const { top10 } = this.state;
    console.log("test", top10);
    return (
      <section className="container">
        <form onSubmit={this.handleSubmit}>
          {/* <form action="/search" method="get"> */}
          <div>
            <div className="input_div">
              <h1>영화 검색</h1>
              <input
                className="input_search"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="영화를 검색해 보세요."
              />
            </div>
            <div className="movies">
              {this.state.top10.map((movie) =>
              (
                <SearchMovie
                  key={movie.link}
                  id={movie.link}
                  year={movie.pubDate}
                  title={movie.title.substr(3, movie.title.length - 7)}
                  poster={movie.image}
                  rating={movie.userRating}
                  director={movie.director}
                  actor={movie.actor}
                />)
              )}
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default withRouter(BoxOffice2);
