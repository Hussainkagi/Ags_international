import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SingleProduct from './components/SingleProduct/SingleProduct';
import { useRef } from 'react';

function App() {
    const categoryRef = useRef();

    const scrollToCategory = () => {
      if (categoryRef.current) {
        categoryRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <BrowserRouter>
        <Header scrollToCategory={scrollToCategory}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/singleProduct' element={<SingleProduct />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
