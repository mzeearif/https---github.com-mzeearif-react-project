import React, { useState , useEffect} from 'react';
import Product from './Product';
import PlusArrow from '../component/PlusArrow';

const ProductGroup = ({categoryName, group,isAllExpanded }) => {


  const [isOpen, setIsOpen] = useState(isAllExpanded);


  useEffect(() => {
    setIsOpen(isAllExpanded);
  }, [isAllExpanded]);


  return (
    <>
      <div className='review__logo' onClick={() => setIsOpen(!isOpen)}>
        {group.svg && <img src={`./svg/${group.svg}`} alt={group.name} />}
      </div>
      <PlusArrow isProductVisible={isOpen} onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <div className='product__review_div'>
          {group.products.map((product) => (
            <Product key={product.panelId} {...product} product={product} categoryName={categoryName} groupName={group.name}/>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductGroup;
