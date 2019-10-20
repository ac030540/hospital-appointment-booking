import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = (props) => {
  const { setHospitalName, onSearchQuery, hospitalName } = props;
  const [displayClearFilters, setDisplayClearFilters] = useState(false);

  // The following function update the value of hospitalName in the parent component
  // when the value of input field changes
  const onSearchValueChange = (event) => {
    setHospitalName(event.target.value);
  };

  // The following fuction works when the user presses a key
  // If the entered key is Enter then it calls the onSearchQuery from the parent component
  const onPressEnter = (event) => {
    if (event.keyCode === 13) {
      setDisplayClearFilters(true);
      onSearchQuery(hospitalName);
    }
  };

  // The following function is used to clear the search results
  const clearSearchQuery = () => {
    setHospitalName('');
    setDisplayClearFilters(false);
    const updatedHospitalName = '';
    onSearchQuery(updatedHospitalName);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          autoFocus
          placeholder="Enter hospital name..."
          value={hospitalName}
          onChange={(event) => onSearchValueChange(event)}
          onKeyDown={(event) => onPressEnter(event)}
        />
      </div>
      {
        hospitalName
      }
      {
        displayClearFilters
          ? <button type="filled" onClick={clearSearchQuery} className="clear-filters-button">Clear Filters</button>
          : null
      }
    </div>
  );
};

Search.propTypes = {
  onSearchQuery: PropTypes.func.isRequired,
  setHospitalName: PropTypes.func.isRequired,
  hospitalName: PropTypes.string.isRequired,
};

export default Search;
