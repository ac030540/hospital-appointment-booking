import React from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  const { setHospitalName, onSearchQuery } = props;

  // The following function update the value of hospitalName in the parent component
  // when the value of input field changes
  const onSearchValueChange = (event) => {
    setHospitalName(event.target.value);
  };

  // The following fuction works when the user presses a key
  // If the entered key is Enter then it calls the onSearchQuery from the parent component
  const onPressEnter = (event) => {
    if (event.key === 'Enter') {
      onSearchQuery();
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => onSearchValueChange(event)}
        onKeyPress={(event) => onPressEnter(event)}
      />
    </div>
  );
};

Search.propTypes = {
  onSearchQuery: PropTypes.func.isRequired,
  setHospitalName: PropTypes.func.isRequired,
};

export default Search;
