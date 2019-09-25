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
        <a href="tel:8286858613"><button className="call-now-button" type="filled">Call Now</button></a>
        <br />
        <a href="https://goo.gl/maps/VVJwpnmATvUJD2438" rel="noopener noreferrer" target="_blank"><button className="get-directions-button" type="filled">Get Directions</button></a>
      </div>
    </div>
  );
};

export default HospitalDetails;
