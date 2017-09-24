export const fetchMovies = () => {
  return fetch(process.env.MOVIES_API_URL)
    .then(res => res.json())
}

export const updateMovies = (movies) => {
  return fetch(process.env.MOVIES_API_URL, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: movies,
  })
    .then(res => res.json())
}

export const addMovie = (movie) => {
  const body = JSON.stringify({ movie });

  return fetch(process.env.MOVIES_API_URL, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body,
  })
    .then(res => res.json())
}

export const removeMovie = (movie) => {
  return fetch(`${process.env.MOVIES_API_URL}/${movie.id}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
}