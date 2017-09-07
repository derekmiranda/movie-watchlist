export const fetchMovies = () => {
  return fetch(process.env.MOVIES_API_URL)
    .then(res => res.json())
}

export const updateMovies = (movies) => {
  return fetch(process.env.MOVIES_API_URL, {
    method: 'PATCH',
    body: movies,
  })
    .then(res => res.json())
}