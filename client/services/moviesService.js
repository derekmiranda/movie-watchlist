const moviesService = {};

moviesService.fetchMovies = () => {
  return fetch(process.env.MOVIES_API_URL)
    .then(res => res.json())
}

export default moviesService;