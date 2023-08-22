import React from 'react';
import './ExpandCollapse.scss';

const ExpandCollapse = ({ isAllExpanded, onToggle }) => {
  const expandText = isAllExpanded ? 'Collapse All' : 'Expand All';

  return (
    <button
      onClick={onToggle}
      className={`right-expand-btn ${isAllExpanded ? 'expanded' : ''}`}
    >
      <span className="expand-text">{expandText}</span>
      <span className="arrow-down">
        <img src='./svg/arrowdown.svg' alt='arrowdown' />
      </span>
    </button>
  );
};

export default ExpandCollapse;
