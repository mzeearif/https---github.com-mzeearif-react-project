import React,{useContext} from 'react'
import './Contact.scss'
import { AppContext } from '../AppContext';

function getCheckedCategories(ids, categories) {
  if (!categories) {
    return [];
  }
  const selectedCategories = categories.map((category) => {
    const selectedProductIds = new Set(ids[category.name]);
    const productGroups = category.productGroups.map((productGroup) => {
      const selectedProducts = productGroup.products.filter((product) => selectedProductIds.has(product.panelId));

      return {...productGroup, selected: selectedProducts};
    });
    const productGroupsWithSelection = productGroups.filter((productGroup) => productGroup.selected.length !== 0);
    return {category, productGroups: productGroupsWithSelection};
  });
  const categoriesWithSelection = selectedCategories.filter((category) => category.productGroups.length !== 0);
  return categoriesWithSelection;
}

const Contact = ({categories}) => {


  const { checked} = useContext(AppContext);

  const ids = {};
  Object.keys(checked).forEach((categoryName) => {
    ids[categoryName] = checked[categoryName];
  });

  // example

  const checkedCategories = getCheckedCategories(ids, categories);
console.log(checkedCategories);




  return (
    <div className='contact-form-container' id='contact-form-container'>
    <div className='content-container'>
        <div className='content-left'>
            <h3 className='h3-class'><span className='1span'>1.</span> Your selected product list</h3>
            <div className='scrollable-input' id='selected_product' name='selected_product'>
              {checkedCategories.map((category, index) => (
              <div key={index} className={`category-${category.category.slug} `}>
                <h3 className='category-class '>{category.category.name}</h3>
                {category.productGroups.map((productGroup, id) => (
                  <div key={id}>
                    <h5 className='group-class'>{productGroup.name}</h5>
                    {productGroup.selected.map((product, i) => (
                      <div key={i}>
                        <p className='prduct-class'> {product.name}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            </div>
        </div>
        <div className='content-right'>
            <h3 className='h3-class'><span className='number'>2.</span> If you want a non-binding offer — Let's talk!</h3>

        </div>
    </div>
</div>
  )
}

export default Contact;

{/*
Object.keys(checked).forEach((categoryName) => {
  checked[categoryName].forEach((item) => {
    dataArray.push({
      categoryName: categoryName,
      groupName: item.groupName,
      productName: item.productName,
    });
  });
});

*/}
