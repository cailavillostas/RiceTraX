import React, { useState, useEffect } from 'react';

const Header = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'pm' : 'am';

            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'

            setCurrentTime(`${hours}:${minutes} ${ampm}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-end p-4">
            <div className="text-2xl font-normal">{currentTime}</div>
        </div>
    );
};

export default Header;