import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '../components/Table';
import { fetchStarted } from '../actions/creators';

const mapStateToProps = (state) => ({
  objs: state.movies,
  newMovie: state.newMovie,
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchStarted()),
})

class FetchTable extends Component {
  
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <Table {...this.props} />
    )
  }
}

const MoviesTable = connect(mapStateToProps, mapDispatchToProps)(FetchTable);

export default MoviesTable;