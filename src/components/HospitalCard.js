import React from 'react';
import PropTypes from 'prop-types';
import './HospitalCard.css';

const HospitalCard = (props) => {
  const {
    hospitalName, address, timings, history, id,
  } = props;
  let { departments } = props;
  departments = departments.map((department) => (
    <div key={department} className="department-shape">
      {department}
    </div>
  ));

  return (
    <div className="card-container">
      <div className="row">
        <div className="col-md-6">
          <div className="hospital-name">
            {hospitalName}
          </div>
          <div className="address">
            {address}
          </div>
          <div className="departments">
            {departments}
          </div>
        </div>
        <div className="col-md-6" style={{ textAlign: 'right' }}>
          <div className="timings">
            {timings}
          </div>
          <button type="outlined" className="book-button" onClick={() => history.push(`/hospital-page/${id}`)}>
            Book Appointment
          </button>
        </div>
      </div>

    </div>
  );
};

HospitalCard.propTypes = {
  hospitalName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  departments: PropTypes.array.isRequired,
  timings: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default HospitalCard;
