import React from 'react';
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
  );
}

export default App;
