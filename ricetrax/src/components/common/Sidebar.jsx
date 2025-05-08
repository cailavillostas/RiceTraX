import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Sidebar = ({ items }) => {
  const location = useLocation();

  return (
    <div className="h-full bg-green-600 bg-opacity-65 p-4">
      <div className="flex flex-col space-y-6">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`text-center text-3xl font-medium ${
                isActive ? 'bg-gray-300 rounded-2xl py-4 px-6' : 'text-black hover:bg-green-700 hover:bg-opacity-30 rounded-2xl py-4 px-6'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Sidebar;