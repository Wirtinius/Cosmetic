import {Route, Routes} from 'react-router-dom';
import {Toaster} from 'sonner'
import {Navbar} from './components/Navbar/index';
import {Home} from './pages/Home/index';
import {Detail} from './pages/Detail/index';
import {ProductForm} from './pages/ProductForm/index';
import {Cart} from './pages/Cart/index';
import {Login} from './pages/User/Login/index';
import {Register} from './pages/User/Register/index';
import {Brands} from './pages/Brand/Brands/index';
import {BrandForm} from './pages/Brand/BrandForm/index';
import {CategoryForm} from './pages/Category/CategoryForm/index';

import {Contact} from './pages/Contact';
import { Categories } from './pages/Category/Categories';


function App() {
  return (
    <>
    <Toaster position="top-right" richColors expand={true}/>
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
        <Route path="/brands" element={<Brands />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/create-brand" element={<BrandForm />} />
        <Route path="/create-category" element={<CategoryForm />} />

      </Routes>
    </>
  );
}

export default App;
