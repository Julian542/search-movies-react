import React, { Component } from 'react';
import { Movie } from './Movie';

export class MoviesList extends Component {

    render() {
        const { movies } = this.props
        return (
            <div className="MoviesList">
                {
                    movies.map(movie => {
                        return (
                            <div key={movie.imdbID}>
                                <Movie
                                    id={movie.imdbID}
                                    title={movie.Title}
                                    year={movie.Year}
                                    poster={movie.Poster}
                                />
                            </div>)
                    })
                }
            </div>
        )
    }
}