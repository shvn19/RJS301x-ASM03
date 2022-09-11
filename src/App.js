import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ShopPage } from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home/>}/>
          <Route path='shop' element={<ShopPage/>} />
          <Route path='*' element={<p>Nothing</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
