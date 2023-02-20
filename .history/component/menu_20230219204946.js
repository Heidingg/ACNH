import React, { useState } from 'react';

function NavigationIcon() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div id="nav-icon" className={isOpen ? 'open' : ''} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
