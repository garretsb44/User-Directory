/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function SortDropDown(props) {
  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort Users
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" onChange={props.handleMaleSort}>By Males</a>
    <a className="dropdown-item" onChange={props.handleFemaleSort}>By Females</a>
  </div>
</div>
  );
}

export default SortDropDown;
