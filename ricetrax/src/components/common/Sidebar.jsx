import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const menuItems = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Inventory', path: '/inventory' },
        { name: 'POS', path: '/pos' }
    ];

    return (
        <div className="h-full bg-[#66a80a] w-[270px]">
            {menuItems.map((item, index) => (
                <Link to={item.path} key={index}>
                    <div
                        className={`py-4 px-6 text-center ${isActive(item.path)
                                ? 'bg-[#d9d9d9] rounded-[20px] mx-6 my-4 font-bold'
                                : 'font-medium my-8'
                            } text-4xl`}
                    >
                        {item.name}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;