import React from 'react';
import './HospitalDetails.css';

const HospitalDetails = () => {
  const departments = ['OPD', 'Gynac', 'ENT'];
  const departmentsArray = departments.map((department) => (
    <div key={department} className="department-shape">
      {department}
    </div>
  ));
  return (
    <div className="hospital-details-container row">
      <div className="col-md-6">
        <div className="hospital-name">
          Sanjeevan Hospital
        </div>
        <div className="hospital-address">
          Sector-12, Kharghar-410210.
        </div>
        <div style={{ margin: '10px', marginLeft: '0px' }}>
          {departmentsArray}
        </div>
      </div>
      <div className="col-md-6 button-container">
        <button className="call-now-button" type="outlined">Call Now</button>
        <br />
        <button className="get-directions-button" type="outlined">Get Directions</button>
      </div>
    </div>
  );
};

export default HospitalDetails;
