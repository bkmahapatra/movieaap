import React, { useRef } from "react";
import "../stylesheets/Navbar.css";

function Navbar({ searchKey }) {
  const inputData = useRef();

  const searchData = () => {
    //console.log(inputData.current.value);
    searchKey(inputData.current.value.toLowerCase());
  };

  return (
    <>
      <div className="navbar">
        <h1>MovieWorld</h1>
        {/* <a href="/">MovieMania</a> */}

        <input
          ref={inputData}
          onChange={searchData}
          className="search_bar"
          type="text"
          name=""
          id="search"
          placeholder="Search Here"
        />
        
      </div>
    </>
  );
}

export default Navbar;
