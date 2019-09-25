import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Hospitals from './routes/Hospitals';
import HospitalPage from './routes/HospitalPage';
import BookingPage from './routes/BookingPage';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollToTop>
      <Route path="/" component={Navbar} />
      <Route path="/" exact component={Hospitals} />
      <Route path="/hospital-page/:hospitalId" exact component={HospitalPage} />
      <Route path="/hospital-page/:hospitalId/:doctorId" exact component={BookingPage} />
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
