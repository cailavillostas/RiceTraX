import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children, bgColor, textColor, rounded, className }) => {
    return (
        <div
            className={`${bgColor || 'bg-white'} ${rounded || 'rounded-[20px]'} ${className || ''}`}
        >
            <div className={`${textColor || 'text-black'} font-bold text-2xl p-2 text-center`}>
                {title}
            </div>
            {children}
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    rounded: PropTypes.string,
    className: PropTypes.string
};

export default Card;