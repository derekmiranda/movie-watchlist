export const fetchMovies = () => {
  return fetch(process.env.MOVIES_API_URL)
    .then(res => res.json())
}