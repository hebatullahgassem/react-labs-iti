import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import WatchList from './components/WatchList';
import Favorites from './components/Favorites';
import MovieDetails from './components/MovieDetails';
import NotFoundPage from './components/NotFoundPage';
import Register from "./components/Register";

const App = () => (

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
         <Route index element={<Home />} />
         <Route path="movie-list" element={<Home />} />
         <Route path='/watch-list' element={<WatchList/>}/>
         <Route path="/favorites" element={<Favorites />} />
         <Route path="/Register" element={<Register/>}/>
         <Route path="/movie-list/:movieId" element={<MovieDetails />} />
         <Route path='*' element={<NotFoundPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
