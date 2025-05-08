import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, onClick, className = '' }) => {
  return (
    <div 
      className={`bg-green-600 p-4 rounded-md cursor-pointer hover:bg-green-700 transition-colors duration-200 ${className}`}
      onClick={onClick}
    >
      <h3 className="text-4xl font-semibold text-black text-center">{title}</h3>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Card;