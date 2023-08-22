import Checkbox from '../component/Checkbox';

const Product = ({name, svg, categoryName,groupName, panelId}) => {


    return (
        <div className='product__review' key={panelId}>
            <div className='product__info'>
                {svg && <img src={`./svg/${svg}`} alt={name} style={{ filter: `brightness(0) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%) var(--primaryCategoryColor)` }} />}

                <p>{name}</p>
            </div>

            <Checkbox productId={panelId} productName={name} categoryName={categoryName} groupName={groupName}/>
        </div>
    );
};

export default Product;
