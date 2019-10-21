import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';
// import doctorDetails from '../static/data/doctorsDetails';
import './Doctors.css';

const Doctors = (props) => {
  const [doctorsArray, setDoctorsArray] = useState([]);
  const { history, location, match } = props;
  const { hospitalId } = match.params;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/doctors/${hospitalId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const mappedArray = data.map((doctor) => {
          const { depts: departments } = doctor;
          const departmentsArray = (departments.map((department) => (
            <div key={department} className="department-shape">
              {department}
            </div>
          )));
          return (
            <DoctorCard
              history={history}
              location={location}
              id={doctor.did}
              key={doctor.did}
              name={doctor.name}
              doctorImageUrl={doctor.img_url}
              degrees={doctor.qualification}
              departments={departmentsArray}
              experience={doctor.years_of_exp}
              description={doctor.description}
              daysAvailable={doctor.days_available}
              timings={doctor.timings}
            />
          );
        });
        setDoctorsArray(mappedArray);
      })
      .catch((err) => console.log('failed to fetch'));
  }, [hospitalId, history, location]);

  return (
    <div className="doctors-container">
      <div className="heading">
        Doctors
      </div>
      <div className="subheading">
        List of all the doctors available in the hospital
      </div>
      <hr />
      {doctorsArray}
    </div>
  );
};

export default Doctors;
