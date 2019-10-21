import React, { useEffect, useState } from 'react';
import './HospitalDetails.css';

const HospitalDetails = (props) => {
  const { hospitalId } = props.match.params;
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [mapUrl, setMapUrl] = useState('');
  const [departmentsArray, setDepartmentsArray] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/hospitalPage/${hospitalId}`)
      .then((response) => response.json())
      .then((data) => {
        setAddress(data[0].address);
        setName(data[0].name);
        setNumber(data[0].number);
        setMapUrl(data[0].map_url);
        const { depts: departments } = data[0];
        setDepartmentsArray(departments.map((department) => (
          <div key={department} className="department-shape">
            {department}
          </div>
        )));
      })
      .catch((err) => console.log('failed to fetch'));
  }, [hospitalId]);


  return (
    <div className="hospital-details-container row">
      <div className="col-md-6">
        <div className="hospital-name">
          {name}
        </div>
        <div className="hospital-address">
          {address}
        </div>
        <div style={{ margin: '10px', marginLeft: '0px' }}>
          {departmentsArray}
        </div>
      </div>
      <div className="col-md-6 button-container">
        <a href={`tel:${number}`}><button className="call-now-button" type="filled">Call Now</button></a>
        <br />
        <a href={mapUrl} rel="noopener noreferrer" target="_blank"><button className="get-directions-button" type="filled">Get Directions</button></a>
      </div>
    </div>
  );
};

export default HospitalDetails;
