import {Route, Routes} from 'react-router-dom';
import {Navbar} from './components/Navbar/index';
import {Home} from './pages/Home/index';
import {Detail} from './pages/Detail/index';
import {ProductForm} from './pages/ProductForm/index';
import {Cart} from './pages/Cart/index';
import {Login} from './pages/User/Login/index';
import {Register} from './pages/User/Register/index';

import {Contact} from './pages/Contact';


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/create-product" element={<ProductForm />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/cart" element={<Cart />}/>
        {/* User */}
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

      </Routes>
    </>
  );
}

export default App;
