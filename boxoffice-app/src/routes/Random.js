import React from "react";
import axios from "axios";
import Movie from "../components/Movie";

class Random extends React.Component {
  // state 선언
  state = {
    isLoading: true,
    movies: [],
  };

  // getMovies 함수 선언
  getMovies = async () => {
    // json 데이터에 접근
    const {
      data: {
        movieListResult: { movieList },
      },
    } = await axios.get(
      "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=3db39eb1eb85ed2bb889e787679d69c2&targetDt=20120101"
      // "http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=3db39eb1eb85ed2bb889e787679d69c2"
    );
    // state 값 변경
    // 선언해준 movies에 api 추출 값인 movieList 추가,
    this.setState({ movies: movieList, isLoading: false });
  };

  // 컴포넌트 생성.
  componentDidMount() {
    this.getMovies();
  }

  render() {
    // 쓰일 state 가져오기
    const { isLoading, movies } = this.state;
    console.log(movies);
    // 삼항연산자
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => {
              return (
                // Movie 로 다음의 값들을 전달해준다.
                <Movie
                  key={movie.movieCd}
                  title={movie.movieNm}
                  genre={movie.genreAlt}
                  prdtYear={movie.prdtYear}
                />
              );
            })}
      </div>
    );
  }
}

export default Random;
