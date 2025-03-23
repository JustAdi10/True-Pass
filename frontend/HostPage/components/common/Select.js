import React from 'react';

function Select({ 
  label, 
  id, 
  value, 
  onChange, 
  options = [], 
  required = false,
  hint,
  placeholder = "Select an option"
}) {
  return (
    <div className="form-group">
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="form-select"
      >
        <option value="" disabled>{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hint && <div className="form-hint">{hint}</div>}
    </div>
  );
}

export default Select;