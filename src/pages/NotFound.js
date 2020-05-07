import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () =>(
    <div>
        <h1 className='title'>Error 404!</h1>
        <h2 className='subtitle'>The page you are looking for, doesn't exist!</h2>
        <Link to='/'>Back to Home</Link> 
    </div>
)