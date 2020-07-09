import React, { Component } from "react";

const SearchEmployees = (props) => {
  const { onChange } = props;
  return (
    <div>
      <input 
      type="text" 
      onChange={onChange} />
    </div>
  );
};

export default SearchEmployees;
