import './Product.scss';
import { useNavigate } from 'react-router-dom';
import image from '../../../assets/products/Image.png';
const Product = () => {

  const navigate = useNavigate();

  return (
    <div className='product-card' onClick={()=>navigate(`/product/singleProduct`)}>
      <div className='thumbnail'>
        <img src={image} alt='' />
      </div>
      <div className='prod-details'>
        <span className='name'>{"Aluminous Batteries"}</span>
        <span className='price'>{'36.31 AED'}</span>
      </div>
    </div>
  );
};

export default Product;
