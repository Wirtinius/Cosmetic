import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import useUser from '../../pages/User/handler/userHandler';
import './index.css';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const isAdmin = useUser().roles[0] === 'ADMIN';
  console.log(useUser());
  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='relative border-y-2 mx-0'>
        <div className='flex text-center justify-evenly space-x-6'>
          {/* Image */}
          <img src={logo} alt="logo" className='w-28' />

          {/* Links */}
          <div className='hidden md:flex space-x-10 my-6'>
            <Link className='group' to="/">
              <span className='opacity-50 group-hover:opacity-100 link-underline link-underline-black text-black'>Shop</span>
            </Link>
            <Link className='group' to="/">
              <span className='opacity-50 group-hover:opacity-100 link-underline link-underline-black text-black'>Brands</span>
            </Link>
            <Link className='group' to="/">
              <span className='opacity-50 group-hover:opacity-100 link-underline link-underline-black text-black'>Sale</span>
            </Link>
            <Link className='group' to="/">
              <span className='opacity-50 group-hover:opacity-100 link-underline link-underline-black text-black'>Discover</span>
            </Link>
            <Link className='group' to="/">
              <span className='opacity-50 group-hover:opacity-100 link-underline link-underline-black text-black'>Beauty Services</span>
            </Link>
            <Link className='group' to="/cart">
              <span className='opacity-50 group-hover:opacity-100 link-underline link-underline-black text-black'>Cart</span>
            </Link>

            {/* Search */}
            
          </div>
          <div className='flex text-center'>
            <div className='my-6 space-x-2'> 
              <FontAwesomeIcon icon={faSearch} size="sm" />
              <input className='' placeholder='Search Items' type='text'></input>
            </div>

            <div className='my-6'> 
              <div className="relative inline-block text-left">
                  <button onClick={toggleDropdown} type="button" className=" border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                      <FontAwesomeIcon icon={faUser} className=" h-5 w-5" />
                  </button>

                  {isOpen && (
                      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                              <a href="login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Login</a>
                              <a href="register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Register</a>

                          </div>
                      </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isAdmin ? (
      <nav className='relative mx-0 bg-pink-200'>
        <div className='flex text-center justify-evenly space-x-4 mr-14'>

          <div className='hidden md:flex space-x-10 my-6'>
            <Link className='group' to="/create-product">
              <span className='admin-link-underline admin-link-underline-black text-black'>Add Product</span>
            </Link>
            <Link className='group' to="/">
              <span className='admin-link-underline admin-link-underline-black text-black'>Add Brand</span>
            </Link>
            <Link className='group' to="/">
              <span className='admin-link-underline admin-link-underline-black text-black'>All Orders</span>
            </Link>
            <Link className='group' to="/">
              <span className='admin-link-underline admin-link-underline-black text-black'>Current Orders</span>
            </Link>
            <Link className='group' to="/">
              <span className='admin-link-underline admin-link-underline-black text-black'>All Users</span>
            </Link>
            
          </div>

        </div>
      </nav>
      ) : null}
    </div>
  );
}
