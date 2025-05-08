import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import Card from '../../components/common/Card';
import Button from '../../components/ui/Button';

const SearchResults = () => {
  const [selectedRice, setSelectedRice] = useState(null);
  
  const sidebarItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'POS', path: '/pos' }
  ];

  const riceVarieties = [
    { id: 1, name: 'Maharlika' },
    { id: 2, name: 'Sinandomeng' },
    { id: 3, name: 'Jasmin' },
    { id: 4, name: 'Dinorado' }
  ];

  const handleRiceSelect = (rice) => {
    setSelectedRice(rice);
  };

  const handleAdd = () => {
    alert('Add new rice variety');
  };

  const handleDelete = () => {
    if (selectedRice) {
      alert(`Delete ${selectedRice.name}`);
    } else {
      alert('Please select a rice variety first');
    }
  };

  const handleEdit = () => {
    if (selectedRice) {
      alert(`Edit ${selectedRice.name}`);
    } else {
      alert('Please select a rice variety first');
    }
  };

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div className="w-[365px] h-full">
        <Sidebar items={sidebarItems} />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-5 flex flex-col">
        {/* Header */}
        <div className="mb-10">
          <Header title="Search" />
        </div>
        
        {/* Rice Varieties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-auto">
          {riceVarieties.map((rice) => (
            <Card
              key={rice.id}
              title={rice.name}
              onClick={() => handleRiceSelect(rice)}
              className={`h-[157px] ${selectedRice?.id === rice.id ? 'ring-4 ring-green-800' : ''}`}
            />
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-end space-x-2 mt-4">
          <Button 
            onClick={handleAdd} 
            className="rounded-lg text-base"
          >
            ADD
          </Button>
          <Button 
            onClick={handleDelete} 
            className="rounded-lg text-base"
          >
            DELETE
          </Button>
          <Button 
            onClick={handleEdit} 
            className="rounded-lg text-base"
          >
            EDIT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;