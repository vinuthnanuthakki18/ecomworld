import React, { useState } from 'react';
import './AddressSelection.css'; // Style the modal

const AddressSelection = ({ isOpen, onClose, onSelect }) => {
  // Sample addresses
  const addresses = [
    { id: 1, name: 'John Doe', city: 'Vijayawada', pincode: '522502' },
    { id: 2, name: 'Jane Smith', city: 'Hyderabad', pincode: '500001' },
    { id: 3, name: 'Michael Johnson', city: 'Bangalore', pincode: '560001' },
    { id: 4, name: 'Alice Williams', city: 'Chennai', pincode: '600001' },
    { id: 5, name: 'David Brown', city: 'Delhi', pincode: '110001' },
    { id: 6, name: 'Emma Davis', city: 'Mumbai', pincode: '400001' },
    { id: 7, name: 'James Wilson', city: 'Pune', pincode: '411001' },
    { id: 8, name: 'Sophia Miller', city: 'Kolkata', pincode: '700001' },
    { id: 9, name: 'Daniel Garcia', city: 'Ahmedabad', pincode: '380001' },
    { id: 10, name: 'Olivia Martinez', city: 'Surat', pincode: '395001' },
  ];
  
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Select an Address</h3>
        <ul className="address-list">
          {addresses.map((address) => (
            <li key={address.id} onClick={() => onSelect(address)}>
              <span>{address.name}</span> - {address.city}, {address.pincode}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddressSelection;
