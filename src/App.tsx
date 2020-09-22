import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import HistoryPage from './components/History';
import SearchPage from './components/Search';

export const Routes: any = () => {
  return(
    <Router>
      <>
        <h1>Prediction App</h1>
        <div className='nav-links'>
          <Link className='nav-link' to='/'>Search</Link>
          <Link className='nav-link' to='/history'>History</Link>
        </div>
      </>

      <Route path='/' exact component={SearchPage} />
      <Route path='/history' component={HistoryPage} />
    </Router>
  )
};
