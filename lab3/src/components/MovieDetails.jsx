import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../App.css'

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try{
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=834b8842fd12d5f8c49bd6688d31fca4`
                );

                const data = await response.json();
            
                if(!response.ok){
                    throw new Error(data.status_message || "Failed to fetch movie details");
                }

                setMovie(data);
            } catch (err){
                setErr(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchMovieDetails();
    }, [movieId]);

    if (loading) return <p>Loading...</p>;
    if (err) return <p>Error: {err}</p>;

    return(
        <div className='movie'>
            <img className="real" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <div className='movie-details'>
                <h1>{movie.title}</h1>
                <p className='date'>{movie.release_date}</p>
                <p className="desc">{movie.overview}</p>
                <p><strong>Language:</strong> {movie.original_language}</p>
                <div className="votes">
                    <p><strong>Vote:</strong> {movie.vote_average}</p>
                    <p><strong>People who voted:</strong> {movie.vote_count}</p>
                </div>
                <img className="smallImg" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
            </div>
        </div>
    );
}

export default MovieDetails;