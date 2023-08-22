import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children, categories }) => {
  const [checked, setChecked] = useState(() => {
    const initialState = {};
    categories.forEach((category) => {
      initialState[category.name] = [];
    });
    return initialState;
  });

  const [selectedData, setSelectedData] = useState([]);

  const handleProductClick = (categoryName, groupName, productName, productId) => {
    setChecked((prevChecked) => {
      const categoryChecked = prevChecked[categoryName];
      const isProductChecked = categoryChecked.includes(productId);

      if (isProductChecked) {
        return {
          ...prevChecked,
          [categoryName]: categoryChecked.filter((id) => id !== productId),
        };
      } else {
        return {
          ...prevChecked,
          [categoryName]: [...categoryChecked, productId],
        };
      }
    });

   {/*  setSelectedData((prevSelectedData) => {

    const updatedSelectedData = [...prevSelectedData];

    const isProductNamePresent = prevSelectedData.some(
      (item) =>
        item.categoryName === categoryName && item.groupName === groupName && item.productName === productName
    );

    if (!isProductNamePresent) {
      updatedSelectedData.push({ categoryName, groupName, productName });
    }
    console.log(updatedSelectedData);
    return updatedSelectedData;
  }); */}

  };

  return (
    <AppContext.Provider value={{ checked, handleProductClick, selectedData }}>
      {children}
    </AppContext.Provider>
  );
};



{/*import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children,categories }) => {
 const [checked, setChecked] = useState(() => {
    const initialState = {};
    categories.forEach((category) => {

      initialState[category.name] = [];
    });
    return initialState;
  });


  const handleProductClick = (categoryName, productId) => {
    setChecked((prevChecked) => {
      const categoryChecked = prevChecked[categoryName];
      const isProductChecked = categoryChecked.includes(productId);

      if (isProductChecked) {
        return {
          ...prevChecked,
          [categoryName]: categoryChecked.filter((id) => id !== productId),
        };
      } else {
        return {
          ...prevChecked,
          [categoryName]: [...categoryChecked, productId],
        };
      }
    });
  };
  return (
    <AppContext.Provider value={{ checked, handleProductClick }}>
      {children}
    </AppContext.Provider>
  );
};
*/}
