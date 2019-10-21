import React from 'react';
import HospitalDetails from '../components/HospitalDetails';
import Doctors from '../components/Doctors';

const HospitalPage = (props) => {
  const { history, location, match } = props;
  return (
    <div>
      <HospitalDetails match={match} />
      <Doctors history={history} location={location} match={match} />
    </div>
  );
};

export default HospitalPage;
