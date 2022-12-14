import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ShopPage } from './pages/Shop';
import { DetailPage } from './pages/DetailPage';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Cart/Checkout/checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home/>}/>
          <Route path='shop' element={<ShopPage/>} />
          <Route path='detail/:id' element={<DetailPage />} />
          <Route path='signup' element={<SignUp /> } />
          <Route path='signin' element={<SignIn /> } />
          <Route path='cart' element={<Cart /> } />
          <Route path='checkout' element={<Checkout /> } />
          <Route path='*' element={<p>Couldnt find any route</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
