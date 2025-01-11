import React, { useEffect, useState, useMemo } from "react";
import { getGenres, getMovies } from "../Services";
import styles from "../style/movies.module.css";

export default function Movies() {
  const [commonGenres, setCommonGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const selectedmovies = JSON.parse(localStorage.getItem("selectiondata"));

  useEffect(() => {
    getGenres().then((res) => {
      const common = res.genres.filter((item) =>
        selectedmovies.some((item1) => item.name === item1.label)
      );
      setCommonGenres(common);
    });
  }, [selectedmovies]);

  const genreMap = useMemo(() => {
    return commonGenres.reduce((map, genre) => {
      map[genre.id] = genre.name;
      return map;
    }, {});
  }, [commonGenres]);

  useEffect(() => {
    getMovies().then((res) => {
      setMovies(res.results);
    });
  }, []);

  const groupedMovies = useMemo(() => {
    if (!commonGenres.length || !movies.length) return {};
    const grouped = {};
    commonGenres.forEach((genre) => {
      grouped[genre.name] = movies.filter((movie) =>
        movie.genre_ids.includes(genre.id)
      );
    });
    return grouped;
  }, [commonGenres, movies]);



  return (
    <div>
      <h1>Movies by Genre</h1>
      {Object.entries(groupedMovies).map(([genreName, genreMovies]) => (
        <div key={genreName}>
          <h2 className={styles.genre}>{genreName}</h2>

          <div id={`scroll-${genreName}`} className={styles.row}>
            {genreMovies.map((movie) => (
              <div className={styles.movieCard} key={movie.id}>
                <img className={styles.img}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
