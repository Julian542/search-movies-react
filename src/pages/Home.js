import React, { Component } from 'react';
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';

export class Home extends Component{
  state = { usedSearch:false, results : []}

  _handleResults = (results) => {
    this.setState({results, usedSearch:true})
  }

  _renderResults(){
      return this.state.results.length === 0
      ? <p>No results</p>
      : <MoviesList movies={this.state.results}/>
      
  }
    render(){
        return(
            <React.Fragment>
                <Title>Website to Search Movies</Title>
                <div className='SearchFormWrapper'>
                <SearchForm onResults={this._handleResults}/>
                </div>
                 {
                    this.state.usedSearch 
                    ?  this._renderResults()
                    : <small>Search the movie you want!</small>
                 }
            </React.Fragment>
        )
    }
}