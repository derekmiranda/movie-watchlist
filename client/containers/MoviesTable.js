import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../components/Table';
import moviesService from '../services/moviesService';

const mapStateToProps = (state) => ({
  objs: state.movies,
  newMovie: state.newMovie,
})

const mapDispatchToProps = (dispatch) => ({
  receivedMovies: () => dispatch(),
})

class FetchTable extends Component {
  
  componentDidMount() {
    async function fetchMovies() {
      const movies = await moviesService.fetchMovies();
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