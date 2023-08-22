import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import './Count.scss';

export const Count = ({ categoryName,customText }) => {
 const {checked} = useContext(AppContext);
 const selectedProductsCount = checked[categoryName]?.length || 0;
  return (
    <div className='count_class'>
      {customText} <span className='count' id='y'>{selectedProductsCount}</span>
    </div>
  );
};
