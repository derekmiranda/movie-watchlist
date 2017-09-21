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

export const addMovie = (movie) => {
  return fetch(process.env.MOVIES_API_URL, {
    method: 'POST',
    body: movie,
  })
    .then(res => res.json())
}

export const removeMovie = (movie) => {
  return fetch(`${process.env.MOVIES_API_URL}/${movie.id}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
}