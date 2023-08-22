import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

export const Count1 = ({ categoryName,customText }) => {
 const {checked} = useContext(AppContext);
 const selectedProductsCount = checked[categoryName]?.length || 0;
  return (
    <div >
      <span>{selectedProductsCount}</span>
    </div>
  );
};
