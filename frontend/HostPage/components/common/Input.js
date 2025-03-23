import React from 'react';

function Input({ 
  label, 
  type = 'text', 
  id, 
  value, 
  onChange, 
  placeholder = '', 
  required = false,
  hint
}) {
  return (
    <div className="form-group">
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="form-input"
      />
      {hint && <div className="form-hint">{hint}</div>}
    </div>
  );
}

export default Input;