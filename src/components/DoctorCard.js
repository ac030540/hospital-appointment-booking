import React from 'react';
// import doctorImage from '../static/images/doctor.jpeg';

const DoctorCard = (props) => {
  const {
    history, id, location, name, description, experience, timings, degrees, daysAvailable, departments, bookButtonHidden, doctorImageUrl
  } = props;
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={doctorImageUrl} className="card-img" alt="doctor" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{degrees}</p>
            <div className="card-text">
Departments:
              {departments}
            </div>
            <p className="card-text">
Years of experience:
              {experience}
            </p>
            <p className="card-text">{description}</p>
            <p className="card-text">
              Days Available:
              {' '}
              {daysAvailable}
              <br />
              Timings:
              {' '}
              {timings}
            </p>
            {
              bookButtonHidden
                ? null
                : <button type="filled" onClick={() => history.push(`${location.pathname}/${id}`)}>Book Appointment</button>
            }

          </div>
        </div>
      </div>
    </div>
  );
};

DoctorCard.defaultProps = {
  bookButtonHidden: false,
};

export default DoctorCard;
