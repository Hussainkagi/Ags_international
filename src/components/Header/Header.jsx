import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';  
import './Header.scss';
const Header = ({ scrollToCategory }) => {

  const [showHead  , setShowHead] = useState(false);
  const handleScroll = () =>{
    const offSet = window.scrollY;
    if(offSet > 200){
        setShowHead(true);
    }else{
      setShowHead(false);
    }
  }
  const navigate = useNavigate();
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
  },[])
  return (
   <>
    <header className={`main-header ${showHead ? 'sticky-header':'' }`}>
      <div className='header-content'>
        <ul className='left'>
          <li onClick={()=> {
            navigate('/');
            scrollToCategory();
        }}>Home</li>
          <li>About</li>
          <li onClick={() => scrollToCategory()}>Category</li>
        </ul>
        <div className='center' onClick={()=> navigate('/')}>AGS</div>
        <div className='right'>
          <TbSearch />
          <AiOutlineHeart />
          <span className='cart-icon'>
            <CgShoppingCart />
          </span>
        </div>
      </div>
    </header>

   </>

  );
};

export default Header;
