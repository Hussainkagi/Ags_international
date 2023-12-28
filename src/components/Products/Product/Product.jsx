import './Product.scss';
import { useNavigate } from 'react-router-dom';
import image from '../../../assets/products/Image.png';
const Product = ({ id, data }) => {

  const navigate = useNavigate();

  return (
    <div className='product-card' onClick={()=>navigate(`/product/singleProduct`)}>
      <div className='thumbnail'>
        <img src={image} alt='' />
      </div>
      <div className='prod-details'>
        <span className='name'>{"Title"}</span>
        <span className='price'>&#8377;{'37628'}</span>
      </div>
    </div>
  );
};

export default Product;
