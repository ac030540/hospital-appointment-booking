import React from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  const { setHospitalName, onSearchQuery } = props;
  const onSearchValueChange = (event) => {
    setHospitalName(event.target.value);
  };
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
