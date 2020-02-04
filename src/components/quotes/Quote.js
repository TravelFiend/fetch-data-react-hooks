import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ character, quote, pic, handleClick }) => (
  <section>
    <h2>{character}</h2>
    <div>
      <img src={pic} />
      <p>{quote}</p>
    </div>
    <button onClick={handleClick}>Get New Quote</button>
  </section>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Quote;
