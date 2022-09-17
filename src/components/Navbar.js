import React from 'react';
import '../stylesheets/Navbar.css';

function Navbar() {
  return (
    <>
        <div className="navbar">
            <a href="/"className="app_name">MovieFun</a>
            <div className="search_bar">
                <input type="text" name="" id="search_item" />
                <div className="btn_search">Search</div>
            </div>
        </div>
    </>
  )
}

export default Navbar;
