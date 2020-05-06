import React, { Component } from 'react';


const API_KEY ='b12a030b';
export class Detail extends Component{

    state={movie:{}}

    _fetchMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then( res => res.json())
        .then( movie =>{
           console.log({movie})
           this.setState({movie})
        })
    }

    _goBack(){
        window.history.back();
    }

    componentDidMount(){
        const {id} = this.props
        this._fetchMovie({id})
    }
    render(){
        const { Title,Poster,Actors,Metascore,Plot } = this.state.movie
        return(
            <React.Fragment>
                <button onClick={this._goBack}>Back to Home</button>                
                <h1>{Title}</h1>
                <img src={Poster}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </React.Fragment>
        )
    }
}