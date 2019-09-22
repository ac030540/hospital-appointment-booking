import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Hospitals from './routes/Hospitals';
import HospitalPage from './routes/HospitalPage';
import './App.css';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollToTop>
      <Route path="/hospitals" exact component={Hospitals} />
      <Route path="/hospital-page" exact component={HospitalPage} />
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
