import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NewsPage from './components/NewsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NewsPage></NewsPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
