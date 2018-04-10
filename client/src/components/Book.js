import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.alt}/><br />
    </div>
  );
}

Book.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Book;