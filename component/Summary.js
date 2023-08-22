import React from 'react';
import './Summary.scss';
import {Count1} from './Count1';
import Contact from './Contact';


const Summary = ({categories}) => {
  return (
    <>
    <div className="bottom-container ">
      <div className="my-header">
        <div className="header-left">
          <button className="expand-button-one">
            <span className="collapse-button-one">
              <img src='./svg/collapse-button.svg' alt='collapse-button' />
            </span>
          </button>
          <p>Summary</p>
        </div>

        <div className='header-right'>
          <p className='selection'>Your selection of products and features:</p>
          <p> Solutions </p>
          <div className='count1 hr-solutions'><Count1 categoryName="HR & Payroll Solutions" /></div>
          <p> Services </p>
          <div className='count1 hr-services'><Count1 categoryName="HR & Payroll Services" /></div>
          <p> SAP </p>
          <div className='count1 sap-solutions'><Count1 categoryName="SAP Products & Services " /></div>
        </div>
      </div>
    </div>
    <Contact categories={categories}/>
    </>
  );
};

export default Summary;
