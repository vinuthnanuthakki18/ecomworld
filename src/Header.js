import React, { useState } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ecommlogo from './assets/ecomm.png';
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import './Header.css';
import { useStateValue } from './StateProvider';
import AddressSelection from './AddressSelection'; // Import AddressSelection component

function Header() {
  const [{ basket }] = useStateValue();
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false); // State to control modal visibility
  const [selectedAddress, setSelectedAddress] = useState({ id: 1, name: 'Nuthakki Vinuthna', city: 'Vijayawada', pincode: '522502' },
  ); // Default address

  // Open modal to select address
  const openAddressModal = () => {
    setIsAddressModalOpen(true);
  };

  // Close modal
  const closeAddressModal = () => {
    setIsAddressModalOpen(false);
  };

  // Handle address selection
  const handleAddressSelect = (address) => {
    setSelectedAddress(address);  // Update selected address
    closeAddressModal();  // Close modal after selecting address
  };

  return (
    <div className="header">
      <div className="header_left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header__logo">
            <img className="logo" src={ecommlogo} alt="" />
          </div>
        </Link>
        <div className="header__address" onClick={openAddressModal}> {/* Trigger the modal on click */}
          <p className="delivery_add_p">Deliver to {selectedAddress.name}</p>
          <div className="add__header__delivery">
            <PlaceIcon fontSize="medium" />
            <h4 className="delivery_add_h">{`${selectedAddress.city}, ${selectedAddress.pincode}`}</h4> {/* Display selected address */}
          </div>
        </div>
      </div>
      <div className="header__search">
        <input className="head__search_type" placeholder="Search" />
        <div className="search_icon_div">
          <SearchIcon fontSize="large" className="search-icon" />
        </div>
      </div>
      <div className="header__nav">
      <Link to="/login" style={{ textDecoration: "none" }}>
        <div className="nav-item">
          <span className="lineitemOne">Hello, Guest</span>
          <span className="lineitemTwo">SignIn</span>
        </div>
      </Link>
        <div className="nav-item">
          <span className="lineitemOne">Your</span>
          <span className="lineitemTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav-item-basket">
            <ShoppingBasketIcon fontSize="large" />
            <span className="lineitemTwo item-basket">{basket.length}</span>
          </div>
        </Link>
      </div>
      {/* Address Selection Modal */}
      <AddressSelection
        isOpen={isAddressModalOpen}
        onClose={closeAddressModal}
        onSelect={handleAddressSelect}
      />
    </div>
  );
}

export default Header;
