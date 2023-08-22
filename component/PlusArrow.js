import React from 'react';
import './PlusArrow.scss';

const PlusArrow = ({ isProductVisible, onClick }) => {
  return (
    <button className='product_expand_icon' onClick={onClick}>
      {isProductVisible ? <img src="./svg/plus.svg" alt="plus" /> : <img src="./svg/arrow.svg" alt="Arrow" />}
    </button>
  );
};

export default PlusArrow;
