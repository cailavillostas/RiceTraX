import React from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import SummaryCards from './components/SummaryCards';
import SalesCharts from './components/SalesCharts';

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}
            <div className="h-full">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-auto">
                {/* Header */}
                <Header />

                {/* Dashboard Content */}
                <div className="flex-1 p-6">
                    {/* Summary Cards */}
                    <SummaryCards />

                    {/* Charts */}
                    <SalesCharts />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;