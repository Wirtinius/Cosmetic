import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar/index';
import { Home } from './pages/Home/index';
import { Detail } from './pages/Detail/index';
import { ProductForm } from './pages/ProductForm/index';
import { Cart } from './pages/Cart/index';
import { Login } from './pages/User/Login/index';
import { Register } from './pages/User/Register/index';
import { Logout } from './pages/User/Logout/index';
import { Brands } from './pages/Brand/Brands/index';
import { BrandForm } from './pages/Brand/BrandForm/index';
import { Brand } from './pages/Brand/Brand/index';
import { Categories } from './pages/Category/Categories';
import { CategoryForm } from './pages/Category/CategoryForm/index';
import { Category } from './pages/Category/Category/index';
import { Contact } from './pages/Contact';
import { About } from './pages/About/index'; // Import the new About component
import { Orders } from './pages/Order/listOrders/index';
import { Users } from './pages/User/ListUsers/index';
function App() {
  return (
    <>
      <Toaster position="top-right" richColors expand={true} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create-product" element={<ProductForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> {/* Add the About route */}
        <Route path="/cart" element={<Cart />} />
        {/* User */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/users" element={<Users />} />

        {/* Brand */}
        <Route path="/brands" element={<Brands />} />
        <Route path="/brand/:id" element={<Brand />} />
        <Route path="/create-brand" element={<BrandForm />} />
        {/* Category */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/create-category" element={<CategoryForm />} />
        
        <Route path="/orders" element={<Orders />} />

      </Routes>
    </>
  );
}

export default App;
