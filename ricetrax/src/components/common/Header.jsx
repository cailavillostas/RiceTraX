import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <h1 className="text-3xl font-light text-center text-black">{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;