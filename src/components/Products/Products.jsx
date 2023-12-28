import "./Products.scss";
import Product from './Product/Product';
const Products = ({innerPage , Title}) => {
  
    return <div className="products-container">
        {!innerPage && <div className="section-heading">{Title}</div>}
        <div className="products">
          {  ( [0,1,2,4,5,6,7].map((item)=>(
            <Product
            key={item.id}
            id={item.id}
            data = {item.attributes}
            />
          )
          )) 
          }
        </div>
    </div>;
};

export default Products;
