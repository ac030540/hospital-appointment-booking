import React, { useState, useEffect, useRef } from 'react';
import hospitalsAndDetails from '../static/data/hospitalsAndDetails';
import Search from '../components/Search';
import HospitalCard from '../components/HospitalCard';
import Navbar from '../components/Navbar';
import './Hospitals.css';

const Hospitals = (props) => {
  const [hospitalName, setHospitalName] = useState('');
  const [hospitalCards, setHospitalCards] = useState([]);
  const hospitalDetails = useRef(hospitalsAndDetails);

  // The following function accepts and array of hospital details
  // It maps those details into the card and update it on the webpage
  const updateHospitalCards = (details) => {
    setHospitalCards(details.map((hospital) => {
      return (
        <HospitalCard
          key={hospital.id}
          hospitalName={hospital.hospitalName}
          address={hospital.address}
          departments={hospital.departments}
          timings={hospital.timings}
        />
      );
    }));
  };

  // The following effect is triggered when the webpage is mounted
  // It is used to intialize the cards on the page when it is mounted
  useEffect(() => {
    updateHospitalCards(hospitalDetails.current);
  }, []);

  // The following function filters the details of the hospitals based on
  // hospitalName, if there is a match then those values are retained.
  // Finally to reflect it on the frontend, we call updateHospitalCards()
  const onSearchQuery = () => {
    const filteredDetails = hospitalDetails.current.filter(
      (details) => details.hospitalName.toLowerCase().includes(hospitalName),
    );
    updateHospitalCards(filteredDetails);
  };

  return (
    <div>
      <Navbar />
      <div className="first-section">
        {/* <div className="tagline">
          Find and book appointments in any hospital
        </div> */}
        {/* <hr /> */}
        <div className="searchbar">
          <Search
            onSearchQuery={onSearchQuery}
            setHospitalName={setHospitalName}
          />
          <div className="searchbar-description">Search hospitals by name to book your appointments</div>
        </div>
      </div>
      <div className="hospital-cards-container">
        <hr />
        {hospitalCards}
      </div>
    </div>
  );
};
export default Hospitals;
