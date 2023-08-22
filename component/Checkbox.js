import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import '../App.scss'
function Checkbox({ productId,productName, categoryName,groupName }) {
  const {checked, handleProductClick } = useContext(AppContext);

  const handleChange = () => {
    handleProductClick(categoryName,groupName,productName, productId);
  };

 const isChecked = checked[categoryName]?.includes(productId) || false;
  return (
    <div className="product__checkbox">
      <input
        type="checkbox"
        className="z"
        id=""
        value={productName}
        data-category-name={categoryName}
        data-group-name={groupName}
        checked={isChecked}
        onChange={handleChange}
      />
    </div>
  );
}

export default Checkbox;
