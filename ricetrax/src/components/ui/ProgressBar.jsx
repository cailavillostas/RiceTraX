import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({
  value,
  max = 100,
  height = 'h-2',
  bgColor = 'bg-gray-200',
  fillColor = 'bg-green-600',
  rounded = 'rounded-full',
  className = '',
  showLabel = false,
  labelPosition = 'right'
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`w-full ${className}`}>
      {showLabel && labelPosition === 'top' && (
        <div className="mb-1 text-sm font-medium text-gray-700">
          {percentage.toFixed(0)}%
        </div>
      )}

      <div className={`w-full ${height} ${bgColor} ${rounded} overflow-hidden`}>
        <div
          className={`${fillColor} ${height} ${rounded}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {showLabel && labelPosition === 'right' && (
        <div className="ml-2 text-sm font-medium text-gray-700">
          {percentage.toFixed(0)}%
        </div>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  fillColor: PropTypes.string,
  rounded: PropTypes.string,
  className: PropTypes.string,
  showLabel: PropTypes.bool,
  labelPosition: PropTypes.oneOf(['top', 'right'])
};

export default ProgressBar;