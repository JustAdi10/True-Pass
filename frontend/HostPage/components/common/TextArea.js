import React from 'react';

function TextArea({ 
  label, 
  id, 
  value, 
  onChange, 
  placeholder = '', 
  rows = 5,
  required = false,
  hint
}) {
  return (
    <div className="form-group">
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="form-textarea"
      />
      {hint && <div className="form-hint">{hint}</div>}
    </div>
  );
}

export default TextArea;