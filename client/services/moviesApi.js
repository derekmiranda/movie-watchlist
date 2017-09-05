export const fetchMovies = () => {
  return fetch(process.env.MOVIES_API_URL)
    .then(res => res.json())
}

export const updateMovies = (movies) => {
  const patchPromises = movies.map((movie) => {
    return fetch(process.env.MOVIES_API_URL, {
      method: 'PATCH',
      body: movie,
    })
      .then(res => res.json())
  })

  return Promise.all(patchPromises);
}