import React, { useState, useEffect, useRef } from 'react';
import hospitalsAndDetails from '../static/data/hospitalsAndDetails';
import Search from '../components/Search';
import HospitalCard from '../components/HospitalCard';

const Hospitals = (props) => {
  const [hospitalName, setHospitalName] = useState('');
  const [hospitalCards, setHospitalCards] = useState([]);
  const hospitalDetails = useRef(hospitalsAndDetails);

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

  useEffect(() => {
    updateHospitalCards(hospitalDetails.current);
  }, []);

  const onSearchQuery = () => {
    const filteredDetails = hospitalDetails.current.filter(
      (details) => details.hospitalName.toLowerCase().includes(hospitalName),
    );
    updateHospitalCards(filteredDetails);
  };

  return (
    <div>
      <Search
        onSearchQuery={onSearchQuery}
        setHospitalName={setHospitalName}
      />
      {hospitalCards}
    </div>
  );
};
export default Hospitals;
