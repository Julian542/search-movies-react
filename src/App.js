import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import {Title} from './components/Title';
import {SearchForm} from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <Title>Website to Search Movies</Title>
      <div className='SearchFormWrapper'>
      <SearchForm/>
      </div>
    </div>
  );
}

export default App;
