import { TMDB_API_BASE_URL, TMDB_BASE_IMAGE_URL, TMDB_API_KEY } from './TMDB';
export class Enpoints {
  static discoverMoviesUrl = (page: number) => {
    return `${TMDB_API_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
  };
  static nowPlayingMoviesUrl = (page: number) => {
    return `${TMDB_API_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&include_adult=false&page=${page}`;
  };
  static getCreditsUrl = (id: number) => {
    return `${TMDB_API_BASE_URL}/movie/${id}/credits?api_key=${TMDB_API_KEY}`;
  };
  static topRatedUrl = (page: number) => {
    return `${TMDB_API_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&include_adult=false&page=${page}`;
  };
  static popularMoviesUrl = (page: number) => {
    return `${TMDB_API_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&include_adult=false&page=${page}`;
  };
  static upcomingMoviesUrl = (page: number) => {
    return `${TMDB_API_BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&include_adult=false&page=${page}`;
  };
  static movieDetailsUrl = (movieId: number) => {
    return `${TMDB_API_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=credits,images`;
  };
  static genresUrl = () => {
    return `${TMDB_API_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`;
  };
  static getMoviesForGenre = (genreId: number, page: number) => {
    return `${TMDB_API_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}`;
  };
  static movieReviewsUrl = (movieId: number, page: number) => {
    return `${TMDB_API_BASE_URL}/movie/${movieId}/reviews?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`;
  };
  static movieSearchUrl = (query: string) => {
    return `${TMDB_API_BASE_URL}/search/movie?query=${query}&api_key=${TMDB_API_KEY}`;
  };
  static personSearchUrl = (query: string) => {
    return `${TMDB_API_BASE_URL}/search/person?query=${query}&api_key=${TMDB_API_KEY}`;
  };
  static getPerson(personId: number) {
    return `${TMDB_API_BASE_URL}/person/${personId}?api_key=${TMDB_API_KEY}&append_to_response=movie_credits`;
  }
}
