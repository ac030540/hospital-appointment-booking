import React, { useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import './BookingPage.css';

const BookingPage = (props) => {
  const { history, location } = props;
  const [patientName, setPatientName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState(undefined);
  const [dateOfAppointment, setDateOfAppointment] = useState(undefined);
  const [contactNumber, setContactNumber] = useState(undefined);

  const onInputChange = (event, setValue) => {
    setValue(event.target.value);
  };
  return (
    <div className="booking-form-container">
      <div className="heading">
        Booking form
      </div>
      <br />
      <div style={{ color: 'gray', marginBottom: '5px' }}>
        You are booking an appointment for doctor working in hospital
      </div>
      <DoctorCard
        history={history}
        location={location}
        id={8}
        key={8}
        name="Test"
        degrees="Test"
        departments="Test"
        experience="Test"
        description="Test Test Test test test test test test test"
        daysAvailable="Mon-fri"
        timings="5:30PM - 9:00PM"
        bookButtonHidden
      />
      <br />
      <div style={{ color: '#69d5b1', fontSize: '20px' }}>
        Please provide the following details to confirm your appointment
      </div>
      <br />
      <div style={{ marginTop: '10px', marginBottom: '5px', marginLeft: '5px' }}>
        Patient Name
      </div>
      <div>
        <input
          type="text"
          className="form-textfield"
          placeholder="Enter Patient's name"
          value={patientName}
          onChange={(event) => onInputChange(event, setPatientName)}
        />
      </div>
      <div style={{ marginTop: '10px', marginBottom: '5px', marginLeft: '5px' }}>
        Age
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter patient's age"
          className="form-textfield"
          value={age}
          onChange={(event) => onInputChange(event, setAge)}
        />
      </div>
      <div style={{ marginTop: '10px', marginBottom: '5px', marginLeft: '5px' }}>
        Address
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter patient's address"
          className="form-textfield"
          value={address}
          onChange={(event) => onInputChange(event, setAddress)}
        />
      </div>
      <div style={{ marginTop: '10px', marginBottom: '5px', marginLeft: '5px' }}>
        Date of Appointment
      </div>
      <div>
        <input
          type="date"
          className="form-textfield"
          value={dateOfAppointment}
          onChange={(event) => onInputChange(event, setDateOfAppointment)}
        />
      </div>
      <div style={{ marginTop: '10px', marginBottom: '5px', marginLeft: '5px' }}>
        Contact Number
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter mobile number"
          className="form-textfield"
          value={contactNumber}
          onChange={(event) => onInputChange(event, setContactNumber)}
        />
      </div>
      <div className="button-wrapper">
        <button type="filled" onClick={() => history.push('/')}>Book Appointment</button>
      </div>
    </div>
  );
};

export default BookingPage;
