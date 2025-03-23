import React from 'react';

function Button({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  onClick, 
  className = '',
  icon
}) {
  const baseClass = `btn btn-${variant} ${className}`;
  
  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}

export default Button;