import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./routes/Search";
import Login from "./routes/Login";
import BoxOffice from "./routes/BoxOffice";
import BoxOffice2 from "./routes/BoxOffice2";
import BoxOffice3 from "./routes/BoxOffice3";
import BoxOffice4 from "./routes/BoxOffice4";
import BoxOffice5 from "./routes/BoxOffice5";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/boxoffice" element={<BoxOffice></BoxOffice>} />
        <Route path="/boxoffice2" element={<BoxOffice2></BoxOffice2>} />
        <Route path="/boxoffice3" element={<BoxOffice3></BoxOffice3>} />
        <Route path="/boxoffice4" element={<BoxOffice4></BoxOffice4>} />
        <Route path="/boxoffice5" element={<BoxOffice5></BoxOffice5>} />
        <Route path="/search" element={<Search></Search>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
