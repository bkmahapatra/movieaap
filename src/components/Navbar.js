import React,{useRef} from "react";
import "../stylesheets/Navbar.css";

function Navbar({searchKey}) {
  const inputData=useRef();

  const searchData=()=>{
    //console.log(inputData.current.value);
   searchKey(inputData.current.value.toLowerCase())
  }

  return (
    <>
      <div className="navbar">
        <a href="/">MovieMania</a>
        <div>
          <input ref={inputData} onChange={searchData} className="search_bar" type="text" name="" id="search" placeholder="Search Here"/>
          {/*   <button className="search_bar" >Go</button> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
