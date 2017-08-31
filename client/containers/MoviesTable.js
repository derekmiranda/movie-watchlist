import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../components/Table';

const mapStateToProps = (state) => ({
  objs: state.movies,
  newMovie: state.newMovie,
})

class FetchTable extends Component {
  
  componentDidMount() {
    async function fetchMovies() {
      const res = await fetch(process.env.MOVIES_API_URL);
      console.log(res);
      const movies = await res.json();
      console.log(movies);
    }
    fetchMovies();
  }

  render() {
    return (
      <Table {...this.props} />
    )
  }
}

const MoviesTable = connect(mapStateToProps)(FetchTable);

export default MoviesTable;