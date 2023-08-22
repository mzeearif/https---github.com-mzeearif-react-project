import React, {useState} from 'react';
import ProductGroup from './ProductGroup';
import { Count } from '../component/Count';
import ExpandCollapse from '../component/ExpandCollapse';


const Category = ({ categoryName,category }) => {


  const [isAllExpanded, setIsAllExpanded] = useState(false);


  const toggleAll = () => {
    setIsAllExpanded((show) => !show);

};
  return (
    <>
    {category.svg && <img src={`./svg/${category.svg}`} alt={category.name} />}
            <div className={`category-${category.slug}`}>
              <Count categoryName={category.name} customText='Your selection:'/>
              <ExpandCollapse
                isAllExpanded={isAllExpanded} onToggle={toggleAll}
              />
        {category.productGroups.map((group) => (
        <div key={group.id}>
          <div className='line-2'></div>
          <div className='group-container-element'>
            <ProductGroup key={group.id} group={group} categoryName={categoryName} isAllExpanded={isAllExpanded} />
          </div>
        </div>
      ))}
            </div>
    </>
  );
};

export default Category;
