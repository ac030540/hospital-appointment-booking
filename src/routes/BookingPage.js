import React, { useState, useEffect } from 'react';
import DoctorCard from '../components/DoctorCard';
import MessageCard from '../components/MessageCard';
import './BookingPage.css';

const BookingPage = (props) => {
  const { history, location, match } = props;
  const [patientName, setPatientName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [dateOfAppointment, setDateOfAppointment] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [departmentsArray, setDepartmentsArray] = useState('');
  const [description, setDescription] = useState('');
  const [doctorImage, setDoctorImage] = useState('');
  const [qualification, setQualificiation] = useState('');
  const [timings, setTimings] = useState('');
  const [experience, setExperience] = useState('');
  const [daysAvailable, setDaysAvailable] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const { hospitalId, doctorId } = match.params;

  const onInputChange = (event, setValue) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/doctors/${hospitalId}/${doctorId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setDoctorName(data[0].name);
        setExperience(data[0].years_of_exp);
        setDoctorImage(data[0].img_url);
        setQualificiation(data[0].qualification);
        setDescription(data[0].description);
        setTimings(data[0].timings);
        setDepartmentsArray(data[0].departments);
        setDaysAvailable(data[0].days_available);
        const { depts: departments } = data[0];
        setDepartmentsArray(departments.map((department) => (
          <span key={department} className="department-shape">
            {department}
          </span>
        )));
      });
  }, [doctorId, hospitalId]);

  const dataValidator = () => {
    let invalidCount = 0;
    const today = new Date();
    const currentYear=today.getFullYear();
    const currentMonth=today.getMonth()+1;
    const currentDate=today.getDate();
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    const enteredDateArray = dateOfAppointment.split('-');
    if(patientName === null || patientName === '') {
      setMessage('Entered name is invalid');
      setMessageType('alert-danger');
      invalidCount++;
    } else if (age === 0 || age === '' || age.length > 3 || age === null || isNaN(age)) {
      setMessage('Entered age is invalid');
      setMessageType('alert-danger');
      invalidCount++;
    } else if (address === null || address === "") {
      setMessage('Entered address is invalid');
      setMessageType('alert-danger');
      invalidCount++;
      } else if (enteredDateArray[0] < String(currentYear)) {
        setMessage('Invalid date selected');
        setMessageType('alert-danger');
        invalidCount++;
      } else if (enteredDateArray[0] === String(currentYear)) {
          console.log('year matched');
          if(enteredDateArray[1] < String(currentMonth)) {
            setMessage('Invalid date selected');
            setMessageType('alert-danger');
            invalidCount++;
          } else if(enteredDateArray[1] === String(currentMonth)) {
            console.log('month matched');
            if (enteredDateArray[2] < String(currentDate)) {
              setMessage('Invalid date selected');
              setMessageType('alert-danger');
              invalidCount++;
            }
          }
      } else if (contactNumber.length !== 10 || isNaN(contactNumber) || contactNumber === '') {
      setMessage('Entered contact number is invalid');
      setMessageType('alert-danger');
      invalidCount++;
    } else if (reg.test(email)===false || email === '') {
      setMessage('Entered email is invalid');
      setMessageType('alert-danger');
      invalidCount++;
    }
    if (invalidCount===0) {
      return true;
    } else {
      return false;
    }
  };

  const onBookButtonClick = () => {
    if (dataValidator()){
      setMessageType('alert-info');
    setMessage('Booking appointment. Please wait.');
    fetch(`${process.env.REACT_APP_SERVER_URL}/booking-appointment/${hospitalId}/${doctorId}`, {
			method : 'POST',
			headers : { 'Content-Type' : 'application/json'},
			body : JSON.stringify({
        name: patientName,
        address,
        age,
        email,
        number: contactNumber,
        date: dateOfAppointment,
      },
    )
		})
		.then(response => response.json())
		.then(data => {
      if(data === 'success') {
        setMessage('Your appointment has been booked. Kindly check your email.');
        setMessageType('alert-success');
      } else {
        setMessage('Unable to book appointment');
        setMessageType('alert-danger');
      }
      setPatientName('');
      setAge('');
      setAddress('');
      setContactNumber('');
      setDateOfAppointment('');
      setEmail('');
    });
    }
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
        id={doctorId}
        key={doctorId}
        name={doctorName}
        degrees={qualification}
        departments={departmentsArray}
        experience={experience}
        description={description}
        daysAvailable={daysAvailable}
        timings={timings}
        doctorImageUrl={doctorImage}
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
          onChange={(event) => { onInputChange(event, setPatientName); }}
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
          onChange={(event) => { onInputChange(event, setAge); }}
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
          onChange={(event) => { onInputChange(event, setAddress); }}
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
          onChange={(event) => { onInputChange(event, setDateOfAppointment); }}
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
          onChange={(event) => { onInputChange(event, setContactNumber); }}
        />
      </div>
      <div style={{ marginTop: '10px', marginBottom: '5px', marginLeft: '5px' }}>
        Email address
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter email address"
          className="form-textfield"
          value={email}
          onChange={(event) => { onInputChange(event, setEmail); }}
        />
      </div>
      <div className="ma2">
        <MessageCard
          message={message}
          messageType={messageType}
        />
      </div>
      <div className="button-wrapper">
        <button type="filled" onClick={onBookButtonClick}>Book Appointment</button>
      </div>
    </div>
  );
};

export default BookingPage;
