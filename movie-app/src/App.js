import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./routes/Search";
import Login from "./routes/Login";
import BoxOffice from "./routes/BoxOffice";
import Random from "./routes/Random";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/boxoffice" element={<BoxOffice></BoxOffice>} />
        <Route path="/search" element={<Search></Search>} />
      </Routes>
    </BrowserRouter>
=======
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardMain from "./routes/board/BoardMain";
import BoardView from "./routes/board/BoardView";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Search from "./routes/Search"
import Navigation from "./components/Navigation";
import Login from "./routes/Login"

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/search" element={<Search></Search>} />
        {/* <Route path="/" exact={true} component={Login}></Route>
        <Route path="/board" component={BoardMain}></Route>
        <Route path="/board/view/:id" component={BoardView}></Route>
        <Route path="/movie/detail/:id" component={Detail}></Route>
        <Route path="/search" exact={true} component={Search}></Route> */}
      </Routes>
    </HashRouter>
>>>>>>> 4bfe92bef7ddca7283e46602822fbc21f4040ea7
  );
}

export default App;
