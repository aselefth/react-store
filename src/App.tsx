import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import React from 'react';

const App: React.FC = () => {
  return (
    <div
    className='mt-14 relative w-[100vw] min-h-full'
    >
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
