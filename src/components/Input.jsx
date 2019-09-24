import React from "react";

const Input = ({ name, label, handleChange, value }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      className="form-control form-control-lg"
      id={name}
      name={name}
      onChange={handleChange}
      type="text"
      value={value}
    />
  </div>
);

export default Input;
