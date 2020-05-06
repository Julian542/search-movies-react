import React, { Component } from 'react';

export class Movie extends Component{
    render(){
        const { id,poster,title,year } = this.props;
        
        return(
            <React.Fragment>
            <a href={`?id=${id}`} className="card">
              <div className="card-image">
                <figure className="image">
                  <img src={poster} alt={poster}/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{year}</p>
                  </div>
                </div>
                </div>
                </a>
                </React.Fragment>  
        )
    }
}