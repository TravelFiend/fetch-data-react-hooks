import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ character, quote, pic, onClick }) => {
  return (
    <div>
      <h2>{character}</h2>
      <div>
        <img src={pic} />
        <p>{quote}</p>
      </div>
      <button onClick={onClick}></button>
    </div>
  );
};

Quote.propTypes = {
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Quote;
