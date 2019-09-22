import React from 'react';
import PropTypes from 'prop-types';
import './HospitalCard.css';

const HospitalCard = (props) => {
  const {
    hospitalName, address, departments, timings,
  } = props;
  return (
    <div className="card-container">
      {hospitalName}
      <br />
      {address}
      <br />
      {departments}
      <br />
      {timings}
      <br />
      <button type="button">
        Book
      </button>
    </div>
  );
};

HospitalCard.propTypes = {
  hospitalName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  departments: PropTypes.string.isRequired,
  timings: PropTypes.string.isRequired,
};

export default HospitalCard;
