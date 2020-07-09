import React, { Component } from "react";

const SearchEmployees = (props) => {
  const { onChange, value } = props;
  return (
    <div>
      <input 
      type="text" 
      onChange={onChange}
      value={value} 
      />
    </div>
  );
};

export default SearchEmployees;
