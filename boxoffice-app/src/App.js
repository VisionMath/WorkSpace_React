import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./routes/Search";
import Login from "./routes/Login";
import BoxOffice from "./routes/BoxOffice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/boxoffice" element={<BoxOffice></BoxOffice>} />
        <Route path="/search" element={<Search></Search>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
