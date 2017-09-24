import _ from 'lodash';

export const processMovie = movie => _.pick(movie, [
  'title',
  'director',
  'genres',
  'actors',
  'notes',
  'id',
])

const processMovies = movies => movies.map(processMovie);

export default processMovies;