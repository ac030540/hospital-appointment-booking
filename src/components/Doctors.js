import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';
import doctorDetails from '../static/data/doctorsDetails';
import './Doctors.css';

const Doctors = (props) => {
  const [doctorsArray, setDoctorsArray] = useState([]);
  const { history, location } = props;
  useEffect(() => {
    const mappedArray = doctorDetails.map((doctor) => (
      <DoctorCard
        history={history}
        location={location}
        id={doctor.id}
        key={doctor.id}
        name={doctor.name}
        degrees={doctor.degrees}
        departments={doctor.departments}
        experience={doctor.experience}
        description={doctor.description}
        daysAvailable={doctor.daysAvaialable}
        timings={doctor.timings}
      />
    ));
    setDoctorsArray(mappedArray);
  }, [history, location]);
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
