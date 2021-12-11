import './App.css';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import StarRating from './components/StarRating';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
     <MovieCard/>
     <MovieList />
     <StarRating />
     <Search />
    </div>
  );
}

export default App;
