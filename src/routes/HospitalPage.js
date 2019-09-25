import React from 'react';
import HospitalDetails from '../components/HospitalDetails';
import Doctors from '../components/Doctors';

const HospitalPage = (props) => {
  const { history, location } = props;
  return (
    <div>
      <HospitalDetails />
      <Doctors history={history} location={location} />
    </div>
  );
};

export default HospitalPage;
