import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../contexts/MovieContext'
import '../css/Favorites.css'


const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className='favorite'>
        <h2>Your Favorites</h2>
        <div className='movies-grid'>
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    )

  }

  return (
    <div>
      <h2>NO Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  )
}

export default Favorites
